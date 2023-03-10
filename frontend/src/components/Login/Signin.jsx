import React from "react";
import { useState, useEffect } from "react";
import "./authentication.css";
import { fulllogo, googleIcon, facebookIcon, appleIcon } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { SecureInput } from "./SecureInput";
import { verifyEmail } from "../../helpers/checkEmail";

function Signin() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleEmailInput = (e) => {
    const emailInput = document.getElementById("emailInput");

    if (emailInput.classList.contains("incorrect-input")) {
      emailInput.classList.remove("incorrect-input");
      emailInput.classList.add("correct-input");
    }

    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    const isValid = await verifyEmail(email);

    if (isValid) {
      await fetch("http://localhost:3000/auth/register-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
    } else {
      const emailInput = document.getElementById("emailInput");

      emailInput.classList.add("incorrect-input");
      emailInput.classList.remove("correct-input");
    }
  };

  const handleCreateAccount = () => {
    navigate("/create-account");
  }

  return (
    <div className="authentication-page">
      <img
        className="app-logo outside"
        src={fulllogo}
        alt="AI ProdCopywriter logo"
      ></img>
      <div className="authentication-card">
        <Grid container direction="row" className="authentication-grid">
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <img
              className="app-logo inside"
              src={fulllogo}
              alt="AI ProdCopywriter logo"
            ></img>
          </Grid>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <p className="header">Sign in</p>
              <p className="subheader">
                Create the perfect description for your needs
              </p>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <a
                className="google-btn"
                href="http://localhost:3000/auth/google"
              >
                <img src={googleIcon} alt={"Signin with Google."}></img>
              </a>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <a
                className="facebook-btn"
                href="http://localhost:3000/auth/facebook"
              >
                <img src={facebookIcon} alt={"Signin with Facebook."}></img>
              </a>
            </Grid>
            {/* <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <a className="apple-btn" href="http://localhost:3000/auth/apple">
                <img src={appleIcon} alt={"Signin with Apple."}></img>
              </a>
            </Grid> */}
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
                id="emailInput"
                placeholder="Email Address"
                onChange={handleEmailInput}
                defaultValue=""
              ></input>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <SecureInput
                placeholder={"Password"}
                value={password}
                setValue={setPassword}
              />
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
              <Link to="/login/forgot-password" className="forgot-password-btn">
                Forgot Password
              </Link>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <Link to="" className="login-help-btn">
                Need help logging in?
              </Link>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <button
                className="submit-btn"
                disabled={email.length === 0 || password.length === 0}
              >
                {email.length === 0 || password.length === 0 ? (
                  <p className="submit-text">Sign in</p>
                ) : (
                  <form
                    method="post"
                    onsubmit="return false"
                    action="http://localhost:3000/auth/local"
                  >
                    <input type="hidden" name="email" value={email}></input>
                    <button
                      className="submit-link"
                      type="submit"
                      name="password"
                      value={password}
                    >
                      Sign In
                    </button>
                  </form>
                )}
              </button>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <button className="secondary-btn" onClick={handleCreateAccount}>
                Create an account
              </button>

              <button onClick={handleSubmit}>Delete this button</button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Signin;
