import React from "react";
import { useState } from "react";
import "./authentication.css";
import { fulllogo } from "../../assets";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { SecureInput } from "./SecureInput";
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, OutlinedInput, Alert } from "@mui/material";

function ResetPassword() {
  const navigate = useNavigate();
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [alertVisibility, setAlertVisibility] = useState(false);

  const handleResetPassword = () => {
    if (password === confirmedPassword) {
      setIsPasswordReset(true);
      setAlertVisibility(false);
    } else {
      setAlertVisibility(true);
    }
  };

  const handleLogin = () => {
    navigate("/login");
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
              <p className="card-header">Reset your password</p>
              <p className="card-subheader">
                Enter your email and a verification code will be sent to your
                inbox
              </p>
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
                  Incorrect email and password
                </Alert>
              )}
            </Grid>
            <Grid item xs={16} sm={16} md={16} lg={16} xl={16}>
              <SecureInput
                title={"New Password"}
                value={password}
                setValue={setPassword}
                disabled={isPasswordReset}
                error={alertVisibility}
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
                onClick={handleResetPassword}
                disabled={isPasswordReset || !(password && confirmedPassword)}
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
      </div>
    </div>
  );
}

export default ResetPassword;
