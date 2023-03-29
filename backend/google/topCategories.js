import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { categoryList } from "../general/categoryList.js";
const propertyId = "358145246";

//service account:creative.ai
//Email address: creative-ai@creativeai-analytics-api.iam.gserviceaccount.com

const analyticsDataClient = new BetaAnalyticsDataClient();
// Runs a simple report.
export async function topCategoriesHelper() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: "2023-01-01",
        endDate: "today",
      },
    ],
    dimensions: [
      {
        name: "pagePath",
      },
    ],
    metrics: [
      {
        name: "eventCount",
      },
    ],
  });
  console.log("Report result:");
  let total_count = 0;
  const paths = response.rows.map((path) => {
    let endPoint = path.dimensionValues[0].value;
    let endPointValue = path.metricValues[0].value;

    let lastIndex = endPoint.lastIndexOf("/");
    if (endPoint.length > 1) {
      endPoint = endPoint.substring(lastIndex);
      return {
        endPoint: endPoint,
        endPointValue: endPointValue,
      };
    } else return null;
  });
  const topCategories = [];
  paths.every((path) => {
    if (path) {
      if (topCategories.length < 5) {
        // console.log(topCategories.length);
        if (categoryList.includes(path.endPoint)) {
          topCategories.push({
            category: path.endPoint,
            count: path.endPointValue,
          });
        }
      }
      total_count += Number(path.endPointValue);
    }
    return true;
  });
  return { topCategories, total_count };
  //              NOTE
  //  Processing latency is 24-48 hours. Standard accounts that send more than 200,000 sessions per day to Analytics will result in the reports being refreshed only once a day. This can delay updates to reports and metrics for up to two days. To restore intra-day processing, reduce the number of sessions your account sends to < 200,000 per day.
}
