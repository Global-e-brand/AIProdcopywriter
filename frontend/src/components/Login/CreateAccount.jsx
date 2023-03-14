import {
  Alert,
  Button,
  Grid,
  TextField,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import { fulllogo } from "../../assets";
import "./login.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";

function CreateAccount() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = React.useState(false);
  const [textEmail, setTextEmail] = React.useState();
  const [textPassword, setTextPassword] = React.useState();
  const [textConfirmPassword, setTextConfirmPassword] = React.useState();
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const navigate = useNavigate();

  const handleShowPassword = (param) => {
    if (param === "password") {
      setShowPassword(!showPassword);
    } else if ((param = "confirm-pass")) {
      setshowConfirmPassword(!showConfirmPassword);
    }
  };

  async function userRegister() {
    let res = await fetch("/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: textEmail,
        password: textPassword,
        confirm_password: textConfirmPassword,
      }),
    });
    try {
      let response = res.json();
      response.then(async (res) => {
        if (res.error) {
          setAlertVisibility(true);
          setAlertMessage(res.error);
        } else {
          navigate("/login", {
            state: { success: true, message: res.message },
          });
        }
      });
    } catch (e) {}
  }

  return (
    <div className="bg-ac">
      <img
        className="app-logo outside"
        src={fulllogo}
        alt="AI ProdCopywriter logo"
      ></img>
      <div className="cr-wrapper">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <img
              className="app-logo inside"
              src={fulllogo}
              alt="AI ProdCopywriter logo"
            ></img>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="text-container">
              <h1>
                <strong>Register</strong>
              </h1>
              <span>Create the perfect description for your needs!</span>
            </div>
          </Grid>
          {/* 
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Button className="sign-btn">
              <img src={googleIcon} alt="google-icon" className="icons" />
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Button className="sign-btn">
              <img src={facebookIcon} alt="facebook-icon" className="icons" />
            </Button>
          </Grid> 

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <h1 className="hr-or">or</h1>
          </Grid>*/}
          {alertVisibility && (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Alert
                severity="error"
                variant="standard"
                className="alert"
                style={{ margin: "0", textAlign: "left" }}
              >
                {alertMessage}
              </Alert>
            </Grid>
          )}

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              id="outlined-basic"
              label="Enter Your Email"
              variant="outlined"
              fullWidth={true}
              onChange={(e) => setTextEmail(e.target.value)}
              error={alertVisibility}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <FormControl className="w-100">
              <InputLabel htmlFor="password" error={alertVisibility}>
                Password
              </InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                error={alertVisibility}
                endAdornment={
                  <InputAdornment>
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={(e) => handleShowPassword("password")}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                onChange={(e) => setTextPassword(e.target.value)}
                label="Password"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <FormControl className="w-100">
              <InputLabel htmlFor="confirm-password" error={alertVisibility}>
                Confirm-Password
              </InputLabel>
              <OutlinedInput
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                error={alertVisibility}
                endAdornment={
                  <InputAdornment>
                    <IconButton
                      aria-label="toggle confirm-password visibility"
                      onClick={() => handleShowPassword("confirm-pass")}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                onChange={(e) => setTextConfirmPassword(e.target.value)}
                label="confirm-Password"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Button
              variant="contained"
              fullWidth={true}
              onClick={userRegister}
              disabled={!textEmail || !textPassword || !textConfirmPassword}
            >
              Create Account
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={"login-return"}>
              <p className="small-text">
                Already have an account?{" "}
                <Link className="text-link" to="/login">
                  Login now
                </Link>
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CreateAccount;
