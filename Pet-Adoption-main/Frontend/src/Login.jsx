import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "./Services/Postrequest";
import { fetch_post_data } from "./Services/Getrequests";

function Login() {
  console.log("In login page");
  const navigate = useNavigate();

  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };
  const onHandleLogin = (e) => {
    e.preventDefault();
    console.log(loginCredentials);
    login(loginCredentials)
      .then((res) => {
        if (res.status == 201) {
          alert("Invalid username or password");
        } else if (res.status == 200) {
          alert("Login Successful");
          const arr = fetch_post_data();
          arr.then((r) => {
            navigate("/user", { state: r.data });
          });
        }
      })
      .catch((error) => console.log(error));
  };
  const { username, password } = loginCredentials;
  return (
    <div className="log">
      <form>
        <div className="ring">
          <i style={{ "--clr": "#00ff0a" }}></i>
          <i style={{ "--clr": "#ff0057" }}></i>
          <i style={{ "--clr": "#fffd44" }}></i>
          <div>
            <div className="login-container">
              <div className="login">
                <h2>Login</h2>
                <div className="inputBx">
                  <input
                    type="text"
                    placeholder="Name"
                    onChange={onHandleChange}
                    name="username"
                  />
                </div>

                <div className="inputBx">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={onHandleChange}
                  />
                </div>

                <div>
                  <button onClick={onHandleLogin}>Login</button>
                </div>
                <div className="links">
                  <a href="#">Forget Password</a>
                  <a href="/register">Signup</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
