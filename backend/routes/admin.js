import express from "express";
import bodyParser from "body-parser";
import { getUserId } from "../general/common.function.js";
import { updateBasicPlan, updateUserRole, validateAdmin } from "../helpers/admin/validateadmin.helper.js";


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
  const basicPlanPrice=req.body.basicPlanPrice;
  console.log("basicPlanPrice",basicPlanPrice)
  
  try {
    let Id = await getUserId(req);
    let Valid = await validateAdmin(Id);
    
    if (Valid){
      await updateBasicPlan(Id,basicPlanPrice);
    } 
    res.send(false);
    
  } catch (error) {
    console.log(error);
  }

  //res.send(true);
});

adminRouter.post("/role", async (req, res) => {
  const email=req.body.email;
  console.log("email",email)
  
  try {
    let Id = await getUserId(req);
    let Valid = await validateAdmin(Id);
    
    if (Valid){
      await updateUserRole(Id,email);
    } 
    res.send(false);
    
  } catch (error) {
    console.log(error);
  }

  //res.send(true);
});

export default adminRouter;
