import express, { json } from "express";
import dotenv from "dotenv";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { authUser } from "../helpers/auth-user.js";
import { checkAuthenticated } from "../helpers/check-authenticated.js";

dotenv.config();

const authrouter = express.Router();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID;
const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_CLIENT_SECRET;

//userImage,firstname,lastname,location


passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      passReqToCallback: true,
    },
    authUser
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: "/auth/facebook/callback",
      passReqToCallback: true,
    },
    authUser
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// authentication api calls
authrouter.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

authrouter.get(
  "/facebook",
  passport.authenticate("facebook", {
    scope: ["email", "user_location"],
  })
);

authrouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/auth/success",
    failureRedirect: "/auth/fail",
  })
);

authrouter.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/auth/success",
    failureRedirect: "/auth/fail",
  })
);

// authrouter.get("/facebook", bodyParser.json(), async (req, res) => {
//   res.send(response);
// });

// authrouter.get("/apple", bodyParser.json(), async (req, res) => {
//   res.send(response);
// });

// authrouter.get("/local", bodyParser.json(), async (req, res) => {
//   res.send(response);
// });

authrouter.get("/fail", (req, res) => {
  console.log("Failed");
  res.redirect("http://localhost:3001/login");
});

authrouter.get("/success", checkAuthenticated, (req, res) => {
  console.log("Success");
  res.redirect("http://localhost:3001/productdescription");
});

authrouter.get("/logout", (req, res) => {
  console.log("Logging out");
  req.logOut((e) => {
    if (e) {
      console.log("Error logging out: " + e);
    }

    req.session.destroy();
    res.redirect("http://localhost:3001/");
  });
});

authrouter.get("/authentication-status", (req, res) => {
  if (req.isAuthenticated()) {
    return res.status(200).send({ status: "authenticated" });
  }

  res.status(403).send({ status: "not authenticated" });
});

export default authrouter;
