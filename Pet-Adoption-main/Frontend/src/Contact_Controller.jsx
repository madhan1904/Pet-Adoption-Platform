import Contact from "./Contact";
import Layout2 from "./layout2";
import { useLocation } from "react-router-dom";

function Contact_Controller() {
  const location = useLocation();
  const email = location.state ? location.state.email : null;
  return (
    <Layout2>
      
      <Contact email={email}/>
    </Layout2>
  );
}

export default Contact_Controller;
