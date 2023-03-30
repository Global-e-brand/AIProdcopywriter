import bodyParser from "body-parser";
import express from "express";
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { google } from "googleapis";
import dotenv from "dotenv";
import {
  activeOneDayUsers,
  userConversionRate,
  usersByCountry,
  usersPieChart,
  getCountryBySession_ActiveUser,
  getTopSubcategories,
} from "../google/usersAnalytics.js";
import { analyticsCreate } from "../helpers/misc/analyticsDBTransaction.js";


dotenv.config();

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

let analyticsController = express.Router();

analyticsController.use(bodyParser.urlencoded({ extended: false }));

analyticsController.use(bodyParser.json());

analyticsController.get("/", bodyParser.json(), async (req, res) => {
  try {
    let activeOneDayUsersData = await activeOneDayUsers();

    let topSubcategories = await getTopSubcategories();

    let usersPieChartData = await usersPieChart();

    let engagementReport = await getCountryBySession_ActiveUser();

    let userConversionData = await userConversionRate();

    let usersByCountryData = await usersByCountry();

    // console.log("topSubcategories",topSubcategories);

    let dashboardData = [
      { activeOneDayUsersData: activeOneDayUsersData },
      { topSubcategories: topSubcategories },
      { usersPieChartData: usersPieChartData },
      { usersPieChartData: usersPieChartData },
      { engagementReport: engagementReport },
      { userConversionData: userConversionData },
      { usersByCountryData: usersByCountryData },
    ];

    //DB Start
    
    const DBTransaction = await analyticsCreate(dashboardData);
    //DB End
    res.send(dashboardData) ;  
  } catch (e) {
    res.status(500).send(e.message);
  }

  
});

// analyticsController.get("/country_engagement", async (req, res) => {
//   const lengthLimit = parseInt(req.query?.lengthLimit);

//   let data = await getCountryEngagementData();
//   let sortedData = await sortJSONArrayByValue(data, 1);

//   if (lengthLimit >= 0) {
//     sortedData = sortedData.slice(
//       0,
//       sortedData.length > lengthLimit ? lengthLimit : sortedData.length
//     );
//   }

//   res.send(sortedData);
// });

export default analyticsController;
