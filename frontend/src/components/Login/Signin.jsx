import React from "react";
import { useState } from "react";
import "./authentication.css";
import {
  fulllogo,
  googleIcon,
  facebookIcon,
  appleIcon,
  eyeClosedIcon,
  eyeOpenIcon,
} from "../../assets";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

function Signin() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div className="login">
      <div className="authentication-card">
        <Grid container direction="column" class="login-grid">
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <img
              className="app-logo"
              src={fulllogo}
              alt="AI ProdCopywriter logo"
            ></img>
          </Grid>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <p className="signin-header">Sign in</p>
              <p className="signin-subheader">
                Create the perfect description for your needs
              </p>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <a
                className="google-btn"
                href="http://localhost:3000/auth/google"
              >
                <img src={googleIcon} alt={"Signin with Google."}></img>
              </a>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <a
                className="facebook-btn"
                href="http://localhost:3000/auth/facebook"
              >
                <img src={facebookIcon} alt={"Signin with Facebook."}></img>
              </a>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <a className="apple-btn" href="http://localhost:3000/auth/apple">
                <img src={appleIcon} alt={"Signin with Apple."}></img>
              </a>
            </Grid>
          </Grid>
          <Grid container direction="row" columns={20} alignItems="center">
            <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
              <div className="line"></div>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
              <p className="divider-text">or</p>
            </Grid>
            <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
              <div className="line"></div>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <input
                className="email-input"
                placeholder="Email Address"
              ></input>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div class="password-input">
                <input
                  type={passwordType}
                  onChange={handlePasswordChange}
                  value={passwordInput}
                  placeholder="Password"
                  className={"input-field"}
                />
                <button className={"visibility-btn"} onClick={togglePassword}>
                  {passwordType === "password" ? (
                    <img src={eyeClosedIcon} alt="hidden password"></img>
                  ) : (
                    <img src={eyeOpenIcon} alt="shown password"></img>
                  )}
                </button>
              </div>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
              <Link to="/forgot-password" className="forgot-password-btn">
                Forgot Password
              </Link>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <Link to="/login-help" className="login-help-btn">
                Need help logging in?
              </Link>
            </Grid>
          </Grid>
          <Grid container direction="column">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <button className="signin-btn" disabled>
                Sign in
              </button>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <button className="create-account-btn">Create an account</button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Signin;
