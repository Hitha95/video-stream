import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
/* import firebase from "firebase";
import { getAuth } from "firebase/auth";
import { FirebaseAuth } from "react-firebaseui";
import { AuthContext } from "../../FIrebase/context"; */
import "../Login/login.css";
import "./sign-up.css";

const SignUp = () => {
  //const { user } = useContext(AuthContext);

  //this is our config for FirebaseAuth
  /*   const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    }, */
  /*  const auth = getAuth();
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      auth.GoogleAuthProvider.PROVIDER_ID,
      auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  }; */

  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const errors = {};

  const runValidations = () => {
    if (signUp.name.trim().length === 0) {
      errors.name = "name cannont be blank";
    }
    if (signUp.email.trim().length === 0) {
      errors.email = "email cannot be blank";
    } else if (!validator.isEmail(signUp.email)) {
      errors.email = "invalid email";
    }
    if (signUp.password.trim().length === 0) {
      errors.password = "password cannot be blank";
    }
    if (
      signUp.password.trim().length > 0 &&
      signUp.password.trim().length < 8
    ) {
      errors.password = "minimum 8 characters";
    }
    if (signUp.confirmPassword.trim().length === 0) {
      errors.confirmPassword = "password cannot be blank";
    } else if (signUp.confirmPassword !== signUp.password) {
      errors.confirmPassword = "password doesn't match";
    }
    /* if (
      confirmPassword.trim().length > 0 &&
      confirmPassword.trim().length < 8
    ) {
      errors.confirmPassword = "minimum 8 characters";
    } else if (confirmPassword.trim() !== password.trim()) {
      errors.confirmPassword = "passwords dont match!";
    } */
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runValidations();
    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      const formData = {
        name: signUp.name,
        email: signUp.email,
        password: signUp.password,
      };
      if (
        localStorage.getItem("video-stream-user") &&
        JSON.parse(localStorage.getItem("video-stream-user")).email ===
          signUp.email
        // JSON.parse(localStorage.getItem("video-stream-user")).email ===
        // email
      ) {
        alert("user already registered. Please login");
        /* setSignUp.name("");
        setSignUp.email("");
        setSignUp.password("");
        setSignUp.confirmPassword(""); */
        setSignUp(() => ({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }));
      } else {
        localStorage.setItem("video-stream-user", JSON.stringify(formData));
      }
    } else {
      setFormErrors(errors);
    }
  };
  const handleSignUp = (e) => {
    let value = e.target.value;
    setSignUp({
      ...signUp,
      [e.target.name]: value,
    });
  };

  return (
    <div className="login-form-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-items">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={signUp.name}
            name="name"
            onChange={handleSignUp}
          />
          {formErrors.name && <span>{formErrors.name}</span>}
        </div>
        <div className="form-items">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={signUp.email}
            name="email"
            onChange={handleSignUp}
          />
          {formErrors.email && <span>{formErrors.email}</span>}
        </div>
        <div className="form-items">
          <label>Password</label>
          <input
            type="password"
            placeholder="enter your password"
            value={signUp.password}
            name="password"
            onChange={handleSignUp}
          />
          {formErrors.password && <span>{formErrors.password}</span>}
        </div>
        <div className="form-items">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="re enter your password"
            value={signUp.confirmPassword}
            name="confirmPassword"
            onChange={handleSignUp}
          />
          {formErrors.confirmPassword && (
            <span>{formErrors.confirmPassword}</span>
          )}
        </div>
        <div className="form-items">
          <button type="submit">SIGN UP</button>
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
