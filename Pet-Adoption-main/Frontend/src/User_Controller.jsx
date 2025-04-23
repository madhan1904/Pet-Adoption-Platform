import { useLocation } from "react-router-dom";
import User from "./User";
import Layout2 from "./layout2";
import { fetch_post_data } from "./Services/Getrequests";
import { useEffect, useState } from "react";

function User_Controller() {
  const location = useLocation();

  const [props, setProps] = useState([]);

  useEffect(() => {
    if (location.state == null) {
      fetch_post_data().then((r) => {
        setProps(r.data);
      });
    }
    else{
      setProps(location.state);
    }
  });

  return (
    <Layout2>
      <div className="parent">
        {props.map((contents) => (
          <User
            petimage={contents.petimage}
            petname={contents.petname}
            petrating={contents.petrating}
            owneremail={contents.owneremail}
          />
        ))}
      </div>
    </Layout2>
  );
}

export default User_Controller;
