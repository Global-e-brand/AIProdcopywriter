import {
  Button,
  Grid,
  TextField,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@mui/material";
import React from "react";
import { appleIcon, facebookIcon, fulllogo, googleIcon } from "../../assets";
import "./login.css";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function CreateAccount(props) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = React.useState(false);

  const handleShowPassword = (param) => {
    if (param === "password") {
      setShowPassword(!showPassword);
    } else if ((param = "confirm-pass")) {
      setshowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="bg-ac">
      <div className="cr-wrapper">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <img src={fulllogo} alt="logo" className="logo" />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="text-container">
              <h1>
                <strong>Register</strong>
              </h1>
              <span>
                <strong>Create the perfect description for your needs!</strong>
              </span>
            </div>
          </Grid>

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
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              id="outlined-basic"
              label="Enter Your Email"
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <FormControl className="w-100">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
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
                label="Password"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <FormControl className="w-100">
              <InputLabel htmlFor="confirm-password">
                Confirm-Password
              </InputLabel>
              <OutlinedInput
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
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
                label="confirm-Password"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Button variant="contained" fullWidth={true}>
            Create Account
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="text-container">
              <span>
                <h5>
                  <strong>Already have an account?</strong>
                </h5>
                <p>
                  <strong className="blue-clr">
                    {" "}
                    <a href="/sign-in">Login now</a>
                  </strong>
                </p>
              </span>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CreateAccount;
