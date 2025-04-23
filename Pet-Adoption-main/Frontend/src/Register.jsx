import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "./Services/Postrequest";

function Register() {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    type: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
    
  };

  const onHandleSignup = (e) => {
    e.preventDefault();
    console.log(registerData);
    register(registerData)
      .then((res) => {
        if (res.status == 202) {
          alert("Registration Successful");
        } else if (res.status == 200) {
          alert("Invalid Credential Format");
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="reg">
      <form onSubmit={onHandleSignup}>
        <div className="ring">
          <i style={{ "--clr": "#00ff0a" }}></i>
          <i style={{ "--clr": "#ff0057" }}></i>
          <i style={{ "--clr": "#fffd44" }}></i>
          <div>
            <div className="register-container">
              <div className="login">
                <h2>Register</h2>
                <div className="inputBx">
                  <input
                    size="25"
                    type="text"
                    placeholder="Name"
                    name="username"
                    onChange={onHandleChange}
                    required
                  />
                </div>

                <div className="inputBx">
                  <input
                    size="25"
                    type="email"
                    placeholder="Email Id"
                    name="email"
                    onChange={onHandleChange}
                    required
                  />
                </div>

                <div className="inputBx">
                  <input
                    size="25"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={onHandleChange}
                    required
                  />
                </div>

                <div className="register-user-type">
                  <div>
                    <label>
                      Owner
                      <input
                        type="radio"
                        name="type"
                        value="Owner"
                        onChange={onHandleChange}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Adopter
                      <input
                        type="radio"
                        name="type"
                        value="Adopter"
                        onChange={onHandleChange}
                      />
                    </label>
                  </div>
                </div>

                <div className="inputBx">
                  <input type="submit" value="Signup" />
                </div>
                <div className="links">
                  <a href="#">Forget Password</a>
                  <a href="/login">Signin</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
