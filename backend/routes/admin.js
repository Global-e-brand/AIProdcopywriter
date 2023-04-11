import express from "express";
import bodyParser from "body-parser";
import { getUserId } from "../general/common.function.js";
import { validateAdmin } from "../helpers/admin/validateadmin.helper.js";
import { changeBasicPlan } from "../helpers/admin/validateadmin.helper.js";

const adminRouter = express.Router();
adminRouter.use(bodyParser.json());
adminRouter.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
adminRouter.get("/", (req, res) => {
  console.log("adminroutercalled");
  res.send(true);
});
adminRouter.post("/plan", async (req, res) => {
  //   console.log("adminroutercalled", req.body.value);
  try {
    let Id = await getUserId();
    let Valid = await validateAdmin(Id);
    if (!Valid) res.send(false);
    await changeBasicPlan();
  } catch (error) {
    console.log(error);
  }

  res.send(true);
});
export default adminRouter;
