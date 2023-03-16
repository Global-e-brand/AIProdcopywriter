import React from "react";
import { useState } from "react";
import "./authentication.css";
import { fulllogo } from "../../assets";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { SecureInput } from "./SecureInput";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

function ResetPassword(props) {
  const navigate = useNavigate();
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerifying, setVerifying] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

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

        if (data.status === "verified") {
          handleResetPassword();
        } else {
          setAlertVisibility(true);
          setVerifying(false);
          setAlertMessage(
            data.error || "Invalid verification code. Check your inbox."
          );
        }
      })
      .catch((e) => {
        setAlertVisibility(true);
        setVerifying(false);
        setAlertMessage(
          "An ERROR occurred while verifying the email OTP. Please try again."
        );
        console.log("An ERROR occurred while verifying the email OTP: " + e);
      });
  };

  const handleResetPassword = async () => {
    await fetch("http://localhost:3000/user/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: props.email,
        password: password,
        confirmedPassword: confirmedPassword,
      }),
    })
      .then(async (res) => {
        const data = await res.json();

        if (data.error) {
          setAlertMessage(data.error);
          setAlertVisibility(true);
        } else {
          setAlertVisibility(false);
          setIsPasswordReset(true);
        }

        setVerifying(false);
      })
      .catch((e) => {
        setAlertMessage(
          "There was an error while resetting your password. Please try again."
        );
        setAlertVisibility(true);
        console.log("Error resetting password: " + e);
      });
  };

  const handleLogin = () => {
    navigate("/login");
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
              <p className="card-subheader">Enter a new account password</p>
            </Grid>
          </Grid>
          <Grid container columnSpacing={1} columns={16}>
            <Grid item xs={16} sm={16} md={16} lg={16} xl={16}>
              {alertVisibility && (
                <Alert
                  severity="error"
                  variant="standard"
                  className="alert"
                  style={{ margin: "10px 0" }}
                >
                  {alertMessage}
                </Alert>
              )}
            </Grid>
            <Grid item xs={16} sm={16} md={16} lg={16} xl={16}>
              <SecureInput
                title={"Verification Code"}
                value={verificationCode}
                setValue={setVerificationCode}
                error={alertVisibility}
                disabled={isPasswordReset}
              />
            </Grid>
            <Grid item xs={16} sm={16} md={16} lg={16} xl={16}>
              <SecureInput
                title={"New Password"}
                value={password}
                setValue={setPassword}
                disabled={isPasswordReset}
                error={alertVisibility}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={16} sm={16} md={16} lg={16} xl={16}>
              <SecureInput
                title={"Confirm Password"}
                value={confirmedPassword}
                setValue={setConfirmedPassword}
                disabled={isPasswordReset}
                error={alertVisibility}
              />
            </Grid>
            <Grid item xs={16} sm={16} md={16} lg={16} xl={16}>
              <button
                className="submit-btn-2"
                onClick={handleVerifyEmail}
                disabled={
                  isVerifying ||
                  isPasswordReset ||
                  !(password && confirmedPassword)
                }
              >
                {isPasswordReset ? "Password Reset!" : "Reset Password"}
              </button>
            </Grid>
            {isPasswordReset && (
              <Grid item xs={16} sm={16} md={16} lg={16} xl={16}>
                <button className="submit-btn-2" onClick={handleLogin}>
                  Login
                </button>
              </Grid>
            )}
          </Grid>
        </Grid>
      </form>
      {!isPasswordReset && (
        <div className={"login-return"}>
          <p className="small-text">
            Back to{" "}
            <Link className="text-link" to="/login">
              Login
            </Link>
          </p>
        </div>
      )}
    </>
  );
}

export default ResetPassword;
