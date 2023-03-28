import { BetaAnalyticsDataClient } from "@google-analytics/data";

const propertyId = '358145246';  

//service account:creative.ai
//Email address: creative-ai@creativeai-analytics-api.iam.gserviceaccount.com 

const analyticsDataClient = new BetaAnalyticsDataClient();
// Runs a simple report.
export async function userReport() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: '2023-02-01',
        endDate: 'today',
      },
    ],
    dimensions: [
      {
        name: 'city',
      },
    ],
    metrics: [
      {
        name: 'activeUsers',
      },
    ],
  });

  console.log('Report result:');
  response.rows.forEach(row => {
    console.log(row.dimensionValues[0], row.metricValues[0]);
  });
}

