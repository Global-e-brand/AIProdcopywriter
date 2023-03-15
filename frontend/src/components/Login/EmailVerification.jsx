import React from "react";
import { useState } from "react";
import "./authentication.css";
import { fulllogo } from "../../assets";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { SecureInput } from "./SecureInput";
import { useNavigate } from "react-router-dom";
import { isEmailValid } from "../../helpers/checkEmail";
import { FormControl, InputLabel, OutlinedInput, Alert } from "@mui/material";

function EmailVerification(props) {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState("");
  const [hasCodeSent, setCodeSent] = useState(false);
  const [isVerifying, setVerifying] = useState(false);
  const [alertVisibility, setAlertVisibility] = useState(false);

  const handleVerifyEmail = async () => {
    setVerifying(true);

    await fetch(
      "http://localhost:3000/email/verify-otp?" +
        new URLSearchParams({
          email: props.email || null,
          OTPGuess: verificationCode || null,
        })
    )
      .then(async (res) => {
        const data = await res.json();
        console.log(data);
        if (data.status === "verified") {
          props.setStage(1);
        } else {
          setAlertVisibility(true);
        }
      })
      .catch((e) => {
        console.log("An ERROR occurred while verifying the email OTP: " + e);
      });

    setVerifying(false);
  };

  const sendCode = async () => {
    setCodeSent(true);

    const isValid = await isEmailValid(props.email);

    if (isValid) {
      setAlertVisibility(false);

      await fetch("http://localhost:3000/email/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: props.email,
        }),
      });
    } else {
      setAlertVisibility(true);
    }

    setCodeSent(false);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
              <p className="card-header">Reset your password</p>
              <p className="card-subheader">
                Enter your email and a verification code will be sent to your
                inbox
              </p>
            </Grid>
          </Grid>
          <Grid container alignItems={"center"} columnSpacing={1} columns={16}>
            <Grid item xs={16} sm={16} md={16} lg={16} xl={16}>
              {alertVisibility && (
                <Alert
                  severity="error"
                  variant="standard"
                  className="alert"
                  style={{ margin: "10px 0", textAlign: "left" }}
                >
                  Incorrect verification code or email. Check your email and try
                  again.
                </Alert>
              )}
            </Grid>
            <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
              <FormControl className="w-100 form-input">
                <InputLabel
                  htmlFor="email"
                  color={alertVisibility ? "error" : "primary"}
                >
                  Email
                </InputLabel>
                <OutlinedInput
                  id="email"
                  onChange={(e) => props.setEmail(e.target.value)}
                  label="email"
                  error={alertVisibility}
                />
              </FormControl>
            </Grid>
            <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
              <button
                className="form-btn"
                onClick={sendCode}
                disabled={props.email.length === 0 || hasCodeSent}
              >
                Send Code
              </button>
            </Grid>
            <Grid item xs={16} sm={16} md={16} lg={16} xl={16}>
              <SecureInput
                title={"Verification Code"}
                value={verificationCode}
                setValue={setVerificationCode}
                error={alertVisibility}
              />
            </Grid>
            <Grid item xs={16} sm={16} md={16} lg={16} xl={16}>
              <button
                className="submit-btn-2"
                onClick={handleVerifyEmail}
                disabled={
                  props.email.length === 0 ||
                  verificationCode.length === 0 ||
                  isVerifying
                }
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
      </form>
      <div className={"login-return"}>
        <p className="small-text">
          Back to{" "}
          <Link className="text-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </>
  );
}

export default EmailVerification;
