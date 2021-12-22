import React, { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import "../Login/login.css";
import "./sign-up.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const errors = {};

  const runValidations = () => {
    if (name.trim().length === 0) {
      errors.name = "name cannont be blank";
    }
    if (email.trim().length === 0) {
      errors.email = "email cannot be blank";
    } else if (!validator.isEmail(email)) {
      errors.email = "invalid email";
    }
    if (password.trim().length === 0) {
      errors.password = "password cannot be blank";
    }
    if (password.trim().length > 0 && password.trim().length < 8) {
      errors.password = "minimum 8 characters";
    }
    if (confirmPassword.trim().length === 0) {
      errors.confirmPassword = "password cannot be blank";
    }
    if (
      confirmPassword.trim().length > 0 &&
      confirmPassword.trim().length < 8
    ) {
      errors.confirmPassword = "minimum 8 characters";
    } else if (confirmPassword.trim() !== password.trim()) {
      errors.confirmPassword = "passwords dont match!";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    runValidations();
    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      const formData = {
        name: name,
        email: email,
        password: password,
      };
      console.log(formData);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="sign-up-form-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-items">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {formErrors.name && <span>{formErrors.name}</span>}
        </div>
        <div className="form-items">
          <label>Email</label>
          <input
            type="text"
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
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {formErrors.password && <span>{formErrors.password}</span>}
        </div>
        <div className="form-items">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="re enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {formErrors.confirmPassword && (
            <span>{formErrors.confirmPassword}</span>
          )}
        </div>
        <div className="form-items">
          <button type="submit">Sign up</button>
        </div>
        <div className="form-items">
          <p>Already a user?</p>
          <p>
            Login{" "}
            <Link to="/login">
              <i>here</i>
            </Link>{" "}
            to continue!
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
