import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/pages/user.scss";

export default function Register() {
  let [username, setUserame] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const checkUsername = async () => {
    let usernameExist = await fetch(
      "http://localhost:8080/api/user/checkusername",
      {
        method: "post",
        body: JSON.stringify({ username }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    usernameExist = await usernameExist.json();
    if(JSON.stringify(usernameExist) === false){
      checkEmail();
    }else{
      document.getElementById("usernameExists").removeAttribute("hidden");
    }
  };

  const checkEmail = async () => {
    let emailExists = await fetch("http://localhost:8080/api/user/checkemail", {
      method: "post",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    emailExists = await emailExists.json();
    if(JSON.stringify(emailExists) === false){
      collectData();
    }else{
      document.getElementById("emailExists").removeAttribute("hidden");
    }
  };

  const collectData = async () => {
    if (
      confirmPassword !== "" &&
      password !== "" &&
      confirmPassword === password
    ) {
      let result = await fetch("http://localhost:8080/api/user/signup", {
        method: "post",
        body: JSON.stringify({ username, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      document.getElementById("notMatch").removeAttribute("hidden");
    }
  };

  return (
    <section className="register">
      <div className="register-div">
        <div id="register" className="register-form-div">
          <h3>Register</h3>
          <form className="register-form" method="POST" action="/user/register">
            <div className="input-div">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="User.username"
                value={username}
                onChange={(e) => setUserame(e.target.value)}
                placeholder="John Doe"
              />
              <label hidden id="usernameExists" className="text-danger">
                This Username already exists!
              </label>
            </div>
            <div className="input-div">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="User.email"
                placeholder="johndoe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label hidden id="emailExists" className="text-danger">
                This Email already exists!
              </label>
            </div>
            <div className="input-div">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="User.password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-div">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label hidden id="notMatch" className="text-danger">
                The passwords doesn't match!
              </label>
            </div>
            <div className="submit">
              <button
                id="submitBtn"
                onClick={checkUsername}
                type="button"
                className="register-btn"
              >
                Register!
              </button>
              <p className="login">
                Already have an account?
                <a id="linkLogin" href="/signin">
                  Sign In!
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
