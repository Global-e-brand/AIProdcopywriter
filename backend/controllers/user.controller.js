import express, { json } from "express";
import bodyParser from "body-parser";
import userModel from "../models/userModel.js";
import {
  updateUserPassword,
  deleteOTP,
} from "../helpers/misc/mongo-db-helpers.js";
import { getUserId } from "../general/common.function.js";
import { hashPassword } from "../helpers/auth/hashing.js";
import { findUser } from "../helpers/misc/mongo-db-helpers.js";
import { getEmailStatus } from "../helpers/email/verify-email.js";

var app = express();

const userController = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));

userController.post("/register", bodyParser.json(), async (req, res) => {
  let email = req.body.email ? req.body.email.trim().toLowerCase() : "";
  let password = req.body.password;
  let confirm_password = req.body.confirm_password;

  const user = await findUser(email);
  const emailIsValid = await getEmailStatus(email);

  if (email == null || password == null || confirm_password == null) {
    return res.status(400).send({
      error: "Fields should not be empty",
      errorTypes: {
        email: true,
        password: true,
        confirm_password: true,
      },
    });
  }

  if (!emailIsValid || email.length > 254) {
    return res.status(400).send({
      error: "Invalid email address",
      errorTypes: { email: true, password: false, confirm_password: false },
    });
  }

  if (user) {
    return res.status(400).send({
      error: "This email has already been used",
      errorTypes: { email: true, password: false, confirm_password: false },
    });
  }

  try {
    if (password === confirm_password) {
      if (password.length < 6) {
        return res.status(400).send({
          error: "Passwords must be at least 6 characters long",
          errorTypes: { email: false, password: true, confirm_password: true },
        });
      }

      const userModelData = new userModel();
      userModelData.email = email;
      userModelData.password = password;
      userModelData.confirm_password = confirm_password;
      userModelData.created_date = new Date();
      userModelData.updated_date = null;
      userModelData.deleted_date = null;
      userModelData.save();

      res.status(201).send({ message: "Account registered successfully!" });
    } else {
      res.status(400).send({
        error: "Passwords do not match",
        errorTypes: { email: false, password: true, confirm_password: true },
      });
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

userController.post("/reset-password", async (req, res) => {
  let email = req.body?.email ? req.body.email.trim().toLowerCase() : "";
  let password = req.body.password;
  let confirmedPassword = req.body.confirmedPassword;

  if (!email || !password || !confirmedPassword) {
    return res.status(400).send({
      error: "Fields should not be empty",
      errorTypes: {
        code: false,
        password: true,
        confirm_password: true,
      },
    });
  }

  try {
    if (password === confirmedPassword) {
      if (password.length < 6) {
        res.status(400).send({
          error: "Passwords must be at least 6 characters long",
          errorTypes: { password: true, confirm_password: true },
        });
      } else {
        password = hashPassword(password);
        confirmedPassword = hashPassword(confirmedPassword);

        await updateUserPassword(email, password, confirmedPassword);

        await deleteOTP(email);

        res.status(201).send({ message: "User password reset!" });
      }
    } else {
      res.status(400).send({
        error: "Passwords do not match",
        errorTypes: { code: false, password: true, confirm_password: true },
      });
    }
  } catch (e) {
    res.status(400).send({ error: e });
  }
});

export default userController;
