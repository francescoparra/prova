import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/pages/user.scss";

export default function Register() {
  let [username, setUserame] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  const collectData = async () => {
    let result = await Axios
      .post("http://localhost:3300/user/register", {username: username, email: email, password: password})
      .then((response) => {
        if (response.data != null) navigate("/");
      });
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
            <div className="submit">
              <button
                onClick={collectData}
                type="button"
                className="register-btn"
              >
                Register!
              </button>
              <p className="login">
                Already have an account?
                <a id="linkLogin" href="/login">
                  Log In
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
