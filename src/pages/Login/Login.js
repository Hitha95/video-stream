import React, { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const errors = {};

  const runValidations = () => {
    if (password.trim().length === 0) {
      errors.password = "password cannot be blank";
    }
    if (password.trim().length < 8) {
      errors.password = "minimum 8 characters";
    }
    //error
    if (email.trim().length === 0) {
      errors.email = "email cannot be blank";
    }
    if (email.trim().length > 0 && validator.isEmail(email)) {
      errors.email = "invalid email";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    runValidations();
    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      const formData = {
        email: email,
        password: password,
      };
      console.log(formData);
    } else {
      setFormErrors(errors);
    }
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {formErrors.email && <span>{formErrors.email}</span>}
        </div>
        <div className="form-items">
          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {formErrors.password && <span>{formErrors.password}</span>}
        </div>
        <div className="form-items">
          <button type="submit" value="login">
            Login
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
        </div>
      </form>
    </div>
  );
};

export default Login;
