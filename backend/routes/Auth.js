import express, { json } from "express";
import dotenv from "dotenv";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { Strategy as LocalStrategy } from "passport-local";
import { authUser } from "../helpers/auth/auth-user.js";
import { checkAuthenticated } from "../helpers/auth/check-authenticated.js";
import { checkNotAuthenticated } from "../helpers/auth/check-not-authenticated.js";
import { findUser } from "../helpers/misc/mongo-db-helpers.js";
import { compare } from "../helpers/auth/hashing.js";
import { getUserId, socialMediaUsers } from "../general/common.function.js";
import checkTrial from "../controllers/checkTrial.js";

dotenv.config();

const authrouter = express.Router();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID;
const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_CLIENT_SECRET;

//userImage,firstname,lastname,location
async function appRedirection(param, req, res) {
  switch (param) {
    case "local":
      if (req.query.host === "localhost") {
        await res.redirect(
          `http://${req.query.host}:3000/auth/success?host=${req.query.host}&&categorypath=${req.query.categorypath}`
        );
      } else {
        await res.redirect(
          `https://${req.query.host}/auth/success?host=${req.query.host}&&categorypath=${req.query.categorypath}`
        );
      }
      break;

    case "login":
      if (req.query.host === "localhost" && req.query.categorypath !== "") {
        await res.redirect(`http://localhost:3001${req.query.categorypath}`);
      } else if (
        req.query.host === "localhost" &&
        req.query.categorypath === null
      ) {
        await res.redirect(`http://localhost:3001/home`);
      } else if (
        req.query.host !== "localhost" &&
        req.query.categorypath !== ""
      ) {
        await res.redirect(`https://${req.query.host}/home`);
      } else if (
        (req.query.categorypath == undefined ||
          req.query.categorypath == null) &&
        req.query.host !== "localhost"
      ) {
        await res.redirect(
          `https://${req.query.host}${req.query.categorypath}`
        );
      }
      break;
    default:
      break;
  }
}


// local auth api calls
authrouter.post(
  "/local",
  checkNotAuthenticated,
  passport.authenticate("local", {
    // successRedirect: `http://localhost:3000/auth/success`,
    failureRedirect: "/auth/fail-local",
  }),
  async (req, res) => {
    // console.log("failure");
    await appRedirection("local", req, res);
  }
);

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      email = email ? email.trim().toLowerCase() : "";

      try {
        const user = await findUser(email);

        if (user == null) {
          console.log("No user matches the provided email");
          return done(null, null);
        }

        const isValid = compare(password, user.password);

        if (!isValid) {
          console.log("Incorrect password");
          done(null, null);
        } else if (isValid) {
          console.log("Correct password!");
          done(null, user);
        }
      } catch (err) {
        console.log(err);
        done(err, null);
      }
    }
  )
);

authrouter.get("/success", checkAuthenticated, async (req, res) => {
  
  if (req.query.media == "google") {
    await socialMediaUsers(req.user);
    return res.redirect("http://localhost:3001/home");
  }
  
  console.log("Login Success");

  let userId = await getUserId();

  console.log(userId);

  let result = await checkTrial(userId);
  console.log("result", result);

  //payment subscription model
  if (true) {
    // check for result
    appRedirection("login", req, res);
  } else {
    console.log("Redirect to Payments");
    res.redirect("http://localhost:3001/payment");
  }
});

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

authrouter.get(
  "/google",
  checkNotAuthenticated,
  passport.authenticate("google", { scope: ["email", "profile"] })
);

authrouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/auth/success?media=google",
    failureRedirect: "/auth/fail",
  })
);
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});


passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: "/facebook/callback",
      profileFields:['id','displayName','name','gender','email']
    },
    authUser
  )
);

authrouter.get(
  "/facebook",
  checkNotAuthenticated,
  passport.authenticate("facebook", {
    scope: ["email"],
  })
);

authrouter.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "http://localhost:3001/home",
    failureRedirect: "http://localhost:3000/auth/fail",
  })
);

authrouter.get("/fail", (req, res) => {
  console.log("Failed");

  res.redirect("https://aiprodcopywriter.herokuapp.com/login");
});

authrouter.get("/fail-local", (req, res) => {
  console.log("Failed local login");

  res.status(400).send({ error: "Error" });
});

authrouter.get("/logout", checkAuthenticated, (req, res) => {
  console.log("Logging out");
  req.logOut((e) => {
    if (e) {
      console.log("Error logging out: " + e);
    }

    req.session.destroy();
    res.send(true);
    // res.redirect("http://localhost:3001/");
  });
});

authrouter.get("/authentication-status", (req, res) => {
  if (req.isAuthenticated()) {
    return res.status(200).send({ status: "authenticated" });
  }

  res.status(401).send({ status: "not authenticated" });
});

export default authrouter;
