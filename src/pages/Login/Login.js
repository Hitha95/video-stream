import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import "./login.css";

const Login = (props) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const errors = {};
  let userdata = {
    email: JSON.parse(localStorage.getItem("video-stream-user"))
      ? JSON.parse(localStorage.getItem("video-stream-user")).email
      : "",
    password: JSON.parse(localStorage.getItem("video-stream-user"))
      ? JSON.parse(localStorage.getItem("video-stream-user")).password
      : "",
  };

  const runValidations = () => {
    if (login.password.trim().length === 0) {
      errors.password = "password cannot be blank";
    }
    if (login.password.trim().length < 8) {
      errors.password = "minimum 8 characters";
    }
    //error
    if (login.email.trim().length === 0) {
      errors.email = "email cannot be blank";
    }
    if (login.email.trim().length === 0) {
      errors.email = "email cannot be blank";
    } else if (!validator.isEmail(login.email)) {
      errors.email = "invalid email";
    }
  };

  const testcredentials = () => {
    let loginCopy = { ...login };
    let data = {
      email: "testcred@mail.com",
      password: "testcred",
    };
    if (loginCopy.email === "" || loginCopy.password === "") {
      localStorage.setItem("video-stream-user", JSON.stringify(data));
      loginCopy.email = data.email;
      loginCopy.password = data.password;
    } else {
      loginCopy = {
        ...JSON.parse(localStorage.getItem("video-stream-user")),
      };
    }
    setLogin(loginCopy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runValidations();
    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      if (
        userdata.email !== "" &&
        userdata.email === login.email &&
        userdata.password !== "" &&
        userdata.password === login.password
      ) {
        JSON.stringify(localStorage.setItem("video-stream-isLoggedIn", true));
        navigate("/");

        window.location.reload();
      } else if (userdata.email !== login.email) {
        alert("please enter your registered email id");
      } else if (userdata.password !== login.password) {
        alert("wrong password");
      }
    } else {
      setFormErrors(errors);
    }
  };

  const handleLogin = (e) => {
    let value = e.target.value;
    setLogin({ ...login, [e.target.name]: value });
  };
  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Login Form</h2>
        <div className="form-items">
          <label>Email</label>
          <input
            type="textbox"
            placeholder="Enter your email"
            value={login.email}
            name="email"
            onChange={handleLogin}
          />

          {formErrors.email && <span>{formErrors.email}</span>}
        </div>
        <div className="form-items">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={login.password}
            name="password"
            onChange={handleLogin}
          />
          {formErrors.password && <span>{formErrors.password}</span>}
        </div>
        <div className="form-items">
          <button type="submit" value="login" className="btn">
            LOGIN
          </button>
        </div>
        <div className="form-items">
          <p>Not a user yet?</p>
          <p>
            Sign up{" "}
            <Link to="/signup">
              <i>here</i>
            </Link>{" "}
            to get started!
          </p>
          <p style={{ fontSize: "13px" }}>
            <i onClick={testcredentials} style={{ cursor: "pointer" }}>
              <u>Click here</u>
            </i>{" "}
            for test credentials
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
