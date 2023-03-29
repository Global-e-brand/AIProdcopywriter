import { updateAnalyticsModel } from "../helpers/misc/mongo-db-helpers.js";

// this function returns the date in YYYYMMDD format
const getDate = () => {
  var date = new Date();
  var year = date.getFullYear().toString();
  var month = (date.getMonth() + 1).toString();
  var day = date.getDate().toString();

  day.length == 1 && (day = "0" + day);
  month.length == 1 && (month = "0" + month);

  var yyyymmdd = year + month + day;

  return yyyymmdd;
};

export const storeAverageEngagementByCountry = async (
  users,
  startDate,
  endDate
) => {
  const countryEngagement = [];

  let countryIndex = null;
  let engagementRateIndex = null;
  let activeUserIndex = null;

  for (let i = 0; i < users.dimensionHeaders.length; i++) {
    if (users.dimensionHeaders[i].name === "country") {
      countryIndex = i;
      break;
    }
  }

  for (let i = 0; i < users.metricHeaders.length; i++) {
    if (users.metricHeaders[i].name === "engagedSessions") {
      engagementRateIndex = i;
    } else if (users.metricHeaders[i].name === "activeUsers") {
      activeUserIndex = i;
    }
  }

  // console.log(users);
  // users.rows.map((row) => console.log(row));

  users.rows.map((row) => {
    countryEngagement.push({
      country:
        countryIndex !== null ? row.dimensionValues[countryIndex].value : null,
      average_engagement_rate:
        engagementRateIndex !== null
          ? row.metricValues[engagementRateIndex].value
          : null,
      data_range: {
        start: startDate,
        end: endDate,
      },
      active_users:
        activeUserIndex !== null
          ? row.metricValues[activeUserIndex].value
          : null,
    });
  });

  await updateAnalyticsModel({
    country_engagement: countryEngagement,
  });
};
