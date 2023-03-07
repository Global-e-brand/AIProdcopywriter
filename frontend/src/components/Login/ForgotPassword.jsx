import React from "react";
import { useState } from "react";
import "./authentication.css";
import { fulllogo } from "../../assets";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { SecureInput } from "./SecureInput";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState("");
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail([...e.target.value]);
  };

  const handleVerifyEmail = () => {
    navigate("/login/reset-password");
  };

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
              <p className="header">Reset your password</p>
              <p className="subheader">
                Enter your email and a verification code will be sent to your
                inbox
              </p>
            </Grid>
          </Grid>
          <Grid container alignItems={"center"} columnSpacing={1} columns={16}>
            <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
              <input
                className="email-input"
                placeholder="Email Address"
                onChange={handleEmail}
                defaultValue=""
              ></input>
            </Grid>
            <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
              <button className="form-btn" disabled={email.length === 0}>
                Send Code
              </button>
            </Grid>
            <Grid item xs={16} sm={16} md={16} lg={16} xl={16}>
              <SecureInput
                placeholder={"Verification Code"}
                value={verificationCode}
                setValue={setVerificationCode}
              />
            </Grid>
            <Grid item xs={16} sm={16} md={16} lg={16} xl={16}>
              <button
                className="submit-btn-2"
                onClick={handleVerifyEmail}
                disabled={email.length === 0 || verificationCode.length === 0}
              >
                Verify Email
              </button>
            </Grid>
          </Grid>
          {/* <Grid container direction="row" columns={20} alignItems="center">
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
          <Grid container direction="row">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <p className="subheader">
                Linked your phone number to your account?
              </p>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <button className="secondary-btn">Verify with SMS</button>
            </Grid>
          </Grid> */}
        </Grid>
        <div className={"login-return"}>
          <p className="small-text">
            Back to{" "}
            <Link className="text-link" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
