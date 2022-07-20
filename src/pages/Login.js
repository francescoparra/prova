import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/pages/user.scss";

export default function Register() {
  let [username, setUserame] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  const collectData = async () => {
      console.warn(username, password);
      let result = await fetch("http://localhost:8080/api/user/signin", {
        method: "post",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      if(result === null){
        document.getElementById("error").removeAttribute("hidden");
      }else{
        localStorage.setItem("user", JSON.stringify(result));
        console.warn(result);
        navigate("/");
      }
  };

  return (
    <section className="register">
      <div className="register-div">
        <div id="login" className="register-form-div">
          <h3>Login</h3>
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
            <label hidden id="error" className="text-danger">
                Username or password wrong!
              </label>
            <div className="submit">
              <button
                id="submitBtn"
                onClick={collectData}
                type="button"
                className="register-btn"
              >
                Login!
              </button>
              <p className="login">
                Dont have an account?
                <a id="linkLogin" href="/signup">
                  Sign up!
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
