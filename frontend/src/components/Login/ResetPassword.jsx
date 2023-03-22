import React from "react";
import { useState } from "react";
import "./authentication.css";
import { fulllogo } from "../../assets";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { SecureInput } from "./SecureInput";
import { useNavigate } from "react-router-dom";
import { Alert, Snackbar, Button } from "@mui/material";
import Loader from "../loader/loader";

function ResetPassword(props) {
  const navigate = useNavigate();
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerifying, setVerifying] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    confirm_password: false,
  });
  const [isOpen, setOpen] = useState(false);
  const [isOTPValid, setOTPValid] = useState();

  const resetInputs = () => {
    setPassword("");
    setConfirmedPassword("");
  };

  const handleVerifyEmail = async () => {
    setVerifying(true);
    setAlertVisibility(false);

    await fetch(
      "/email/verify-otp?" +
        new URLSearchParams({
          email: props.email || "",
          OTPGuess: verificationCode || "",
        })
    )
      .then(async (res) => {
        const data = await res.json();

        if (data.status === "verified") {
          setOTPValid(true);
          handleResetPassword();
        } else {
          setAlertVisibility(true);
          setVerifying(false);
          setOTPValid(false);
          resetInputs();
          setAlertMessage(
            data.error ||
              "Invalid verification code and/or email. Please check your inbox."
          );
          setErrors({ code: true, password: false, confirm_password: false });
        }
      })
      .catch((e) => {
        setAlertVisibility(true);
        resetInputs();
        setVerifying(false);
        setOTPValid(false);
        setAlertMessage(
          "An ERROR occurred while verifying the email OTP. Please try again."
        );
        console.log("An ERROR occurred while verifying the email OTP: " + e);
        setErrors({ code: true, password: false, confirmed_password: false });
      });
  };

  const handleResetPassword = async () => {
    await fetch("/user/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: props.email || "",
        password: password,
        confirmedPassword: confirmedPassword,
      }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (data.error) {
          setAlertMessage(data.error);
          setAlertVisibility(true);
          resetInputs();
          setErrors(data.errorTypes);
        } else {
          setAlertVisibility(false);
          setIsPasswordReset(true);
          setOpen(true);
        }
        setVerifying(false);
      })
      .catch((e) => {
        setAlertMessage(
          "There was an error while resetting your password. Please try again."
        );
        setAlertVisibility(true);
        resetInputs();
        setErrors({ code: false, password: false, confirmed_password: false });
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
                  style={{ margin: "10px 0", textAlign: "left" }}
                >
                  {alertMessage}
                  {!isOTPValid ? (
                    <>
                      <p>
                        Alternatively,{" "}
                        <span>
                          <button
                            className="text-link text-button"
                            onClick={() => {
                              props.setStage("email");
                            }}
                          >
                            resend a code.
                          </button>
                        </span>
                      </p>
                    </>
                  ) : (
                    ""
                  )}
                </Alert>
              )}
            </Grid>
            <Grid item xs={16} sm={16} md={16} lg={16} xl={16}>
              <SecureInput
                title={"Verification Code"}
                value={verificationCode}
                setValue={setVerificationCode}
                error={alertVisibility && errors.code}
                disabled={isPasswordReset}
                autoFocus={true}
              />
            </Grid>
            <Grid item xs={16} sm={16} md={16} lg={16} xl={16}>
              <SecureInput
                title={"New Password"}
                value={password}
                setValue={setPassword}
                disabled={isPasswordReset}
                error={alertVisibility && errors.password}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={16} sm={16} md={16} lg={16} xl={16}>
              <SecureInput
                title={"Confirm Password"}
                value={confirmedPassword}
                setValue={setConfirmedPassword}
                disabled={isPasswordReset}
                error={alertVisibility && errors.confirm_password}
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
                {isPasswordReset ? (
                  "Password Reset!"
                ) : isVerifying ? (
                  <Loader scale="0.5" color="#b5d3ff" />
                ) : (
                  "Reset Password"
                )}
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
      <Snackbar
        open={isOpen}
        autoHideDuration={2000}
        onClose={() => {
          setOpen(false);
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => {
            setOpen(false);
          }}
          severity="success"
          sx={{ width: "100%", textAlign: "left" }}
        >
          Password successfully reset!
        </Alert>
      </Snackbar>
    </>
  );
}

export default ResetPassword;
