import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { post } from "./Services/Postrequest";
import { fetch_post_data } from "./Services/Getrequests";

function Post() {
  const navigate = useNavigate();
  const [postDetails, setPostDetails] = useState({
    petname: "",
    owneremail: "",
    petrating: "",
    petimage: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setPostDetails({ ...postDetails, [name]: value });
  };

  const onHandlePost = (e) => {
    e.preventDefault();
    post(postDetails).then((res) => {
      if (res.status == 200) {
        alert("Post Field is Empty");
      }
      if (res.status == 201) {
        alert("Success");
        const arr = fetch_post_data();
        arr.then((r) => {
          navigate("/user", { state: r.data });
        });
      }
    });
  };
  return (
    <>
      <div>
        <form onSubmit={onHandlePost}>
          <div className="post">
            <h2>Post</h2>
            <div className="inputBx">
              <input
                size="25"
                type="text"
                placeholder="Pet Name"
                name="petname"
                required
                onChange={onHandleChange}
              />
            </div>

            <div className="inputBx">
              <input
                size="25"
                type="email"
                placeholder="Owner Email"
                name="owneremail"
                required
                onChange={onHandleChange}
              />
            </div>
            <div className="inputBx">
              <input
                size="25"
                type="number"
                placeholder="Pet Rating"
                name="petrating"
                required
                onChange={onHandleChange}
              />
            </div>
            <div className="inputBx">
              <input
                size="25"
                type="text"
                placeholder="Pet Image"
                name="petimage"
                required
                onChange={onHandleChange}
              />
            </div>
            <div className="inputBx">
              <button type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Post;
