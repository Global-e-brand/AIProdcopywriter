import { BetaAnalyticsDataClient } from "@google-analytics/data";

const propertyId = "358145246";

// Using a default constructor instructs the client to use the credentials
// specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.

//service account:creative.ai
//Email address: creative-ai@creativeai-analytics-api.iam.gserviceaccount.com

const analyticsDataClient = new BetaAnalyticsDataClient();
// Runs a simple report.
export async function getCountryEngagementReport(startDate, endDate) {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: startDate,
        endDate: endDate,
      },
    ],
    dimensions: [
      {
        name: "country",
      },
    ],
    metrics: [
      {
        name: "activeUsers",
      },
      {
        name: "engagementRate",
      },
    ],
  });

  return response;

  // console.log("Report result:");
  // response.rows.map((row) => {
  //   console.log(row);
  // });
}
