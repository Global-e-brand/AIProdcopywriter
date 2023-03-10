import express, { json } from "express";
import dotenv from "dotenv";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { Strategy as LocalStrategy } from "passport-local";
import { authUser } from "../helpers/auth/auth-user.js";
import { checkAuthenticated } from "../helpers/auth/check-authenticated.js";
import { verifyEmail } from "../helpers/auth/verify-email.js";
import { insertUser, findUser } from "../helpers/misc/mongo-db-helpers.js";
import {
  comparePassword,
  hashPassword,
} from "../helpers/auth/password-hashing.js";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

dotenv.config();

const jsonParser = bodyParser.json();

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
    },
    async (email, password, done) => {
      email = email ? email.trim().toLowerCase() : "";

      try {
        const user = await findUser(email);

        if (user === null) {
          console.log("No user matches the provided email");
          return done(null, null);
        }

        const isValid = comparePassword(password, user.hashedPassword);

        if (!isValid) {
          console.log("Invalid authentication");
          done(null, null);
        } else if (isValid) {
          console.log("Authenticated succesfully!");
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

authrouter.get("/verify-email", async (req, res) => {
  const data = await verifyEmail(req.query.email);

  res.send(data);
});

authrouter.post("/register-account", jsonParser, async (req, res) => {
  const email = req.body.email ? req.body.email.trim().toLowerCase() : "";
  const user = await findUser(email);

  if (user === null) {
    const hashedPassword = hashPassword(req.body.password);

    await insertUser(email, hashedPassword);

    console.log("Registered user!");
    res.redirect("http://localhost:3001/login");
  } else {
    console.log("Cannot register user. Email already in use.");
    res.redirect("http://localhost:3001/login");
  }
});

// authentication api calls
authrouter.post(
  "/local",
  passport.authenticate("local", {
    successRedirect: "/auth/success",
    failureRedirect: "/auth/fail",
  })
);

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

authrouter.post("/send-otp", jsonParser, async (req, res) => {
  let status = 200;
  let err = null;

  // const otp = Math.floor(Math.random());

  var transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "curry09213@hotmail.com",
      pass: "&*ASD-90=)}SAD)_{}ihi12DUN[",
    },
  });

  var mailOptions = {
    from: "curry09213@hotmail.com",
    to: req.body.email,
    subject: "Email verification code for AI ProdCopywriter",
    text: req.body.code,
    html: `<body style="text-align: center">
    <h1>See below for your verification code</h1>
    <p style="font-weight: 800; text-align: center">
      Code: ${req.body.code}
    </p>
    <br />
    <a href="http://localhost:3001/login">Click here to login</a>
    </body>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(`There was an error: ${error}`);
      err = error;
      status = 500;
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.status(status).send({ success: status === 200, error: err });
});

authrouter.get("/verify-otp", async (req, res) => {
  let status = 200;
  let err = null;

  res.status(status).send({ success: status === 200, error: err });
});

export default authrouter;
