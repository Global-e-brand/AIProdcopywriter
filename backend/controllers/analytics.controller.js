import bodyParser from "body-parser";
import express from "express";
import {BetaAnalyticsDataClient} from "@google-analytics/data"
import { google } from "googleapis";
import dotenv from "dotenv";
import { userReport } from "../google/usersAnalytics.js";

dotenv.config();

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let analyticsController =express.Router();

analyticsController.get("/",bodyParser.json(),async (req,res)=>{

  let usersChart=await userReport();

console.log("usersChart",usersChart);
})


export default analyticsController;