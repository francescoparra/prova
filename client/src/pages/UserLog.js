import React from "react";
import "../style/pages/user.scss";
import Navbar from "../components/Navbar";

export default function Register() {
  document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#register");

    document
      .querySelector("#linkCreateAccount")
      .addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
      });

    document.querySelector("#linkLogin").addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.remove("form-hidden");
      createAccountForm.classList.add("form-hidden");
    });
  });
  return (
    <section class="register">
      <Navbar />
      <div className="register-div">
        <div id="register" className="register-form-div">
          <h3>Register</h3>
          <form
            className="register-form"
            method="POST"
            action="/user/register"
          >
            <div className="input-div">
              <label for="name" className="form-label">
                Full Name
              </label>
              <input type="text" name="name" placeholder="John Doe" />
            </div>
            <div className="input-div">
              <label for="name" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="johndoe@example.com"
              />
            </div>
            <div className="input-div">
              <label for="password" className="form-label">
                Password
              </label>
              <input type="password" name="password" />
            </div>
            <div className="input-div">
              <label for="password" className="form-label">
                Confirm Password
              </label>
              <input type="password" name="password" />
            </div>
            <div className="submit">
              <button type="submit" className="register-btn">
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
        <div id="login" className="register-form-div form-hidden">
          <h3>Login</h3>
          <form
            className="register-form"
            method="POST"
            action="/user/log"
          >
            <div className="input-div">
              <label for="name" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
              />
            </div>
            <div className="input-div">
              <label for="password" className="form-label">
                Password
              </label>
              <input type="password" name="password" />
            </div>
            <div className="submit">
              <button type="submit" className="register-btn">
                Login!
              </button>
              <p className="login">
                Don't have an account?
                <a id="linkCreateAccount" href="#">
                  Register
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
