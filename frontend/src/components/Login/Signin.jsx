import React from "react";
import { useState, useEffect } from "react";
import "./authentication.css";
import { fulllogo, googleIcon, facebookIcon, appleIcon } from "../../assets";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import { SecureInput } from "./SecureInput";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Alert,
  Snackbar,
} from "@mui/material";

function Signin() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location?.state?.success) {
      setOpen(true);

      // the following is used to prevent page refreshes from
      // re-rendering the "successful account registration"
      // snackbar
      navigate("/login", {
        state: { message: location?.state?.message },
      });
    }
  }, [location?.state?.success]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleFormResponse = async (e) => {
    /*
    Since we want to display error messages, we need to ensure that the
    page is not refreshed. However, standard redirect requests from the server
    will force a page refresh. Thus, instead of redirecting the page directly, we redirect
    to an element that is on the page (an IFrame). Then, once the IFrame is updated
    we take the URL that is stored in the body of the IFrame and use that URL to 
    redirect the user to the correct destination.
    */
    if (
      e.target?.contentDocument?.location?.href &&
      e.target?.contentDocument?.location?.href !== "about:blank"
    ) {
      navigate(e.target.contentDocument.location || "/login");
    } else if (e.target?.contentDocument?.location?.href !== "about:blank") {
      setAlertVisibility(true);
      setLoading(false);
    }
  };

  /*
  We must submit the data via a form because the server needs to be able to redirect the browser
  to complete the authentication process. The fetch API doesn't allow such behaviour as the server
  cannot redirect from fetch requests.
  */
  const handleFormSubmission = async (e) => {
    e.preventDefault();
    setLoading(true);

    let form = document.createElement("form");
    let emailInput = document.createElement("input");
    let passwordInput = document.createElement("input");

    let host = window.location.hostname;
    form.method = "POST";
    form.action = `/auth/local?host=${host}`;
    form.target = "stay";

    emailInput.value = email;
    emailInput.name = "email";
    form.appendChild(emailInput);

    passwordInput.value = password;
    passwordInput.name = "password";
    form.appendChild(passwordInput);

    document.body.appendChild(form);

    form.submit();

    emailInput.remove();
    passwordInput.remove();
    form.remove();
  };

  const handleCreateAccount = () => {
    navigate("/create-account");
  };

  return (
    <div className="authentication-page">
      <img
        className="app-logo outside"
        src={fulllogo}
        alt="AI ProdCopywriter logo"
      ></img>
      <div className="authentication-card">
        <form
          className="submit-form"
          id="submit-form"
          onSubmit={(e) => handleFormSubmission(e)}
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
                <p className="card-header">Sign in</p>
                <p className="card-subheader">
                  Create the perfect description for your needs
                </p>
              </Grid>
              {/* <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <a className="google-btn" href="/auth/google">
                  <img src={googleIcon} alt={"Signin with Google."}></img>
                </a>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <a className="facebook-btn" href="/auth/facebook">
                  <img src={facebookIcon} alt={"Signin with Facebook."}></img>
                </a>
              </Grid> */}
              {/* <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <a className="apple-btn" href="https://aiprodcopywriter.herokuapp.com/auth/apple">
                <img src={appleIcon} alt={"Signin with Apple."}></img>
              </a>
            </Grid> */}
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
            </Grid> */}
            <Grid container direction="row" justifyContent="space-between">
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                {alertVisibility && (
                  <Alert
                    severity="error"
                    variant="standard"
                    className="alert"
                    style={{ margin: "10px 0", textAlign: "left" }}
                  >
                    Incorrect email and/or password
                  </Alert>
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormControl className="w-100 form-input">
                  <InputLabel
                    htmlFor="email"
                    color={alertVisibility ? "error" : "primary"}
                  >
                    Email
                  </InputLabel>
                  <OutlinedInput
                    id="emailInput"
                    onChange={handleEmail}
                    label="email"
                    error={alertVisibility}
                    autoComplete="username"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <SecureInput
                  title={"Password"}
                  value={password}
                  setValue={setPassword}
                  error={alertVisibility}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                <Link
                  to="/login/forgot-password"
                  className="forgot-password-btn"
                >
                  Forgot Password
                </Link>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Link to="" className="login-help-btn">
                  Need help logging in?
                </Link>
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <iframe
                  name="stay"
                  hidden
                  onLoad={(e) => handleFormResponse(e)}
                ></iframe>
                <button
                  className="submit-btn"
                  type="submit"
                  name="password"
                  disabled={
                    email.length === 0 ||
                    password.length === 0 ||
                    (isLoading && email.length !== 0 && password.length !== 0)
                  }
                >
                  Sign In
                </button>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <button className="secondary-btn" onClick={handleCreateAccount}>
                  Create an account
                </button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
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
          {location?.state?.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Signin;
