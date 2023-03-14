import express, { json } from "express";
import bodyParser from "body-parser";
import userModel from "../models/userModel.js";
import { updateUserPassword } from "../helpers/misc/mongo-db-helpers.js";
import { getUserId } from "../general/common.function.js";
import { hashPassword } from "../helpers/auth/hashing.js";

var app = express();

const userController = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));

userController.post("/register", bodyParser.json(), async (req, res) => {
  let email = req.body.email ? req.body.email.trim().toLowerCase() : "";
  let password = req.body.password;
  let confirm_password = req.body.confirm_password;

  if (email == null || password == null || confirm_password == null) {
    return res.status(400).send({ message: "text fields should not be empty" });
  }

  try {
    if (password === confirm_password) {
      const userModelData = new userModel();
      userModelData.email = email;
      userModelData.password = password;
      userModelData.confirm_password = confirm_password;
      userModelData.created_date = new Date();
      userModelData.updated_date = null;
      userModelData.deleted_date = null;
      userModelData.save();

      res.status(201).send({ message: "user registered successfully !" });
    } else {
      res.send("passwords do not match");
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

userController.post("/reset-password", async (req, res) => {
  let email = req.body.email ? req.body.email.trim().toLowerCase() : "";
  let password = req.body.password;
  let confirmedPassword = req.body.confirmedPassword;

  if (!email || !password || !confirmedPassword) {
    return res.status(400).send({ message: "text fields should not be empty" });
  }

  try {
    if (password === confirmedPassword) {
      password = hashPassword(password);
      confirmedPassword = hashPassword(confirmedPassword);

      await updateUserPassword(email, password, confirmedPassword);

      res.status(201).send({ message: "User password reset!" });
    } else {
      res.send("Passwords do not match");
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

export default userController;
