import bodyParser from "body-parser";
import express from "express";
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { google } from "googleapis";
import dotenv from "dotenv";
import { storeAverageEngagementByCountry } from "../google/storeAverageEngagementByCountry.js";
import { getCountryEngagementReport } from "../google/usersAnalytics.js";
import { getCountryEngagementData } from "../helpers/misc/mongo-db-helpers.js";
import { sortJSONArrayByValue } from "../helpers/misc/sorting.js";

dotenv.config();

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let analyticsController = express.Router();

analyticsController.use(bodyParser.urlencoded({ extended: false }));
analyticsController.use(bodyParser.json());

analyticsController.get("/", bodyParser.json(), async (req, res) => {
  let engagementReport = await getCountryEngagementReport(
    "2023-01-01",
    "today"
  );

  await storeAverageEngagementByCountry(
    engagementReport,
    "2023-01-01",
    "today"
  );

  console.log("/dashboard");
});

analyticsController.get("/country_engagement", async (req, res) => {
  const lengthLimit = parseInt(req.query?.lengthLimit);

  let data = await getCountryEngagementData();
  let sortedData = await sortJSONArrayByValue(data, 1);

  if (lengthLimit >= 0) {
    sortedData = sortedData.slice(
      0,
      sortedData.length > lengthLimit ? lengthLimit : sortedData.length
    );
  }

  res.send(sortedData);
});

export default analyticsController;
