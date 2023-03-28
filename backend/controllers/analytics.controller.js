import bodyParser from "body-parser";
import express from "express";
import {BetaAnalyticsDataClient} from "@google-analytics/data"
import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let analyticsController =express.Router();

analyticsController.get("/",bodyParser.json(),(req,res)=>{
   const propertyId = '358145246';
  

  // Using a default constructor instructs the client to use the credentials
  // specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.

  //service account:creative.ai
  //Email address: creative-ai@creativeai-analytics-api.iam.gserviceaccount.com 

 const analyticsDataClient = new BetaAnalyticsDataClient();
  // Runs a simple report.
  // async function runReport() {
  //   const [response] = await analyticsDataClient.runReport({
  //     property: `properties/${propertyId}`,
  //     dateRanges: [
  //       {
  //         startDate: '2023-02-01',
  //         endDate: 'today',
  //       },
  //     ],
  //     dimensions: [
  //       {
  //         name: 'city',
  //       },
  //     ],
  //     metrics: [
  //       {
  //         name: 'activeUsers',
  //       },
  //     ],
  //   });

  //   console.log('Report result:');
  //   response.rows.forEach(row => {
  //     console.log(row.dimensionValues[0], row.metricValues[0]);
  //   });
  // }

  // runReport();


  const scopes = "https://www.googleapis.com/auth/analytics.readonly";

  const jwt = new google.auth.JWT(
    process.env.CLIENT_EMAIL,
    null,
    process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes
  );

  const view_id = "358145246";

  async function getViews(){
    try {
      await jwt.authorize();
      // console.log("google.analytics",google.analytics("v3"));
  
      const response = await google.analytics("v3").data.ga.get({
        auth: jwt,
        ids: "ga:" + view_id,
        "start-date": "30daysAgo",
        "end-date": "today",
        metrics: "ga:pageviews",
      });
  
      console.log(response);
  
    } catch (err) {
       console.log(err);
    }
  };

  getViews();


console.log("/dashboard")
})


export default analyticsController;