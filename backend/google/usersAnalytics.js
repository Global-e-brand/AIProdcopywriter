import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { categoryList } from "../general/categoryList.js";

const propertyId = "358145246";
const analyticsDataClient = new BetaAnalyticsDataClient();

const start_Date = "2023-01-01";
const end_Date = "today";
const yesterday_Day = "yesterday";

export async function usersPieChart() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: start_Date,
        endDate: end_Date,
      },
    ],
    metrics: [
      {
        name: "totalUsers",
      },
      {
        name: "newUsers",
      },
    ],
  });

  let usersDetail = [];
  response.rows.forEach((row) => {
    usersDetail.push({
      users: Number(row.metricValues[0].value),
      new_users: Number(row.metricValues[1].value),
      total_users:
        Number(row.metricValues[0].value) + Number(row.metricValues[1].value),
    });
  });

  return usersDetail;
}

export async function usersByCountry() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: start_Date,
        endDate: end_Date,
      },
    ],
    dimensions: [
      {
        name: "country",
      },
    ],
    metrics: [
      {
        name: "totalUsers",
      },
    ],
  });

  let totalUsersByCountry = [];
  response.rows.forEach((row) => {
    totalUsersByCountry.push({
      country: row.dimensionValues[0].value,
      users: Number(row.metricValues[0].value),
    });
  });

  let top_five_country = totalUsersByCountry.slice(0, 5);
  top_five_country.push({ total_country: Number(response.rows.length) });

  let usersByCountry = [
    { totalUsersByCountry: totalUsersByCountry },
    { top_five_country: top_five_country },
  ];

  return usersByCountry;
}

export async function userConversionRate() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: start_Date,
        endDate: end_Date,
      },
    ],
    dimensions: [
      {
        name: "country",
      },
    ],
    metrics: [
      {
        name: "userConversionRate",
      },
    ],
  });

  let conversionrate = response.rowCount;
  return conversionrate;
}

export async function activeOneDayUsers() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: yesterday_Day,
        endDate: end_Date,
      },
    ],
    metrics: [
      {
        name: "active1DayUsers",
      },
    ],
  });

  let user = response.rows[0].metricValues[0].value;

  return user;
}

export async function getCountryBySession_ActiveUser() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: start_Date,
        endDate: end_Date,
      },
    ],
    dimensions: [
      {
        name: "country",
      },
    ],
    metrics: [
      {
        name: "engagedSessions",
      },
      {
        name: "activeUsers",
      },
    ],
  });

  let engagedSessionsByCountry = [];
  let activeUsersByCountry = [];

  response.rows.forEach((row) => {
    //engagedSessionsByCountry
    engagedSessionsByCountry.push({
      country: row.dimensionValues[0],
      sessions: row.metricValues[0],
    });

    //activeUsersByCountry
    activeUsersByCountry.push({
      country: row.dimensionValues[0],
      sessions: row.metricValues[1],
    });
  });

  let top_five_sessions_country = engagedSessionsByCountry.slice(0, 5);
  let top_five_activeUser_country = activeUsersByCountry
    .sort((a, b) => b.sessions.value - a.sessions.value)
    .slice(0, 5);

  const session_and_ActiveUserData = {
    top_five_sessions_country: top_five_sessions_country,
    top_five_activeUser_country: top_five_activeUser_country,
  };

  return session_and_ActiveUserData;
}

export async function getTopSubcategories() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: start_Date,
        endDate: end_Date,
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

export async function getResultRequests(startDate, endDate) {
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
        name: "customEvent:category_form_submit",
      },
    ],
    metrics: [
      {
        name: "eventCount",
      },
    ],
  });
  // console.log(response);

  let parsedData = [];
  let total_value = 0;
  response.rows.map((row) => {
    if (categoryList.includes(row.dimensionValues[0].value)) {
      total_value= Number(row.metricValues[0].value)+total_value,
      parsedData.push({
        path_name: row.dimensionValues[0].value,
        submit_count: row.metricValues[0].value,
      });
    }
  });




  return {request_count:total_value};
}
