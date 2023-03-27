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

        if (user === null) {
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

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// authrouter.post("/register-account", jsonParser, async (req, res) => {
//   const email = req.body.email ? req.body.email.trim().toLowerCase() : "";
//   const user = await findUser(email);

//   if (user === null) {
//     const hashedPassword = hashPassword(req.body.password);

//     await insertUser(email, hashedPassword);

//     console.log("Registered user!");
//     res.redirect("http://localhost:3001/login");
//   } else {
//     console.log("Cannot register user. Email already in use.");
//     res.redirect("http://localhost:3001/login");
//   }
// });

// authentication api calls
authrouter.post(
  "/local",
  checkNotAuthenticated,
  passport.authenticate("local", {
    // successRedirect: `http://localhost:3000/auth/success`,
    failureRedirect: "/auth/fail-local",
  }),
  (req, res) => {
    res.redirect(
        `http://${req.query.host}/auth/success?host=${req.query.host}&&categorypath=${req.query.categorypath}`
    );
  }
);

authrouter.get(
  "/google",
  checkNotAuthenticated,
  passport.authenticate("google", { scope: ["email", "profile"] })
);

authrouter.get(
  "/facebook",
  checkNotAuthenticated,
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

authrouter.get("/fail", (req, res) => {
  console.log("Failed");

  res.redirect("https://aiprodcopywriter.herokuapp.com/login");
});

authrouter.get("/fail-local", (req, res) => {
  console.log("Failed local login");

  res.status(400).send({ error: "Error" });
});

authrouter.get("/success", checkAuthenticated, async (req, res) => {
  console.log("168",req.query);
  await socialMediaUsers(req.user);

  console.log("Success");

  //payment subscription model
  let userId = await getUserId();
  console.log(userId);
  let result = await checkTrial(userId);
  console.log("result",result);
  if (true) {
    // check for result
    if(req.query.host=="localhost" && req.query.categorypath !=''){
      res.redirect(`http://localhost:3001${req.query.categorypath}`);
    }else if(req.query.host=="localhost" && req.query.categorypath ==undefined){
      res.redirect(`http://localhost:3001/home`);
    }else if(req.query.host !== "localhost" && req.query.categorypath ==undefined){
      res.redirect(`https://${req.query.host}/home`);
    }else{
      res.redirect(`https://${req.query.host}${req.query.categorypath}`);
    }
  } else {
    console.log("Redirect to Payments");
    res.redirect("http://localhost:3001/payment");
  }
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
