import "./App.css";
import {Route, Routes } from "react-router-dom";
import Login_controller from "./login_controller";
import Home_controller from "./Home_controller";
import Register_controller from "./Register_controller";
import User_Controller from "./User_Controller";
import Contact_Controller from "./Contact_Controller";
import Post_Controller from "./Post_Controller";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home_controller />}></Route>
        <Route path="/home" element={<Home_controller />}></Route>
        <Route path="/login" element={<Login_controller />}></Route>
        <Route path="/register" element={<Register_controller />}></Route>
        <Route path="/user" element={<User_Controller />} />
        <Route path="/contact" element={<Contact_Controller />} />
        <Route path="/post" element={<Post_Controller/>} />
      </Routes>
    </>
  );
}

export default App;
