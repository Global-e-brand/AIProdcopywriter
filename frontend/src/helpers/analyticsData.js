import { canada, india, unitedStates, unitedKingdom, france } from "../assets";

/* This function returns data in the format of:
[
    {
        name: 'name',
        img: imageComponent || null,
        value: value
    },
    {
        name: 'name',
        img: imageComponent || null,
        value: value
    },
    ...
]
*/

export const getSessionEngagementByCountry = async (lengthLimit) => {
  return await fetch(
    `/dashboard/country_engagement?` +
      new URLSearchParams({
        lengthLimit: lengthLimit || null,
      })
  )
    .then(async (raw) => {
      const data = await raw.json();

      let engagementDetails = [];

      data.map((item) => {
        engagementDetails.push({
          name: item.country,
          img: canada,
          value: item.average_engagement_rate,
        });
      });

      return engagementDetails;
    })
    .catch((e) =>
      console.error(
        "There was an issue fetching the average engaged sessions data: " + e
      )
    );
};

export const getActiveUsersByCountry = async (lengthLimit) => {
  return await fetch(
    `/dashboard/country_engagement?` +
      new URLSearchParams({
        lengthLimit: lengthLimit || null,
      })
  )
    .then(async (raw) => {
      const data = await raw.json();

      let activeUsers = [];
      data.map((item) => {
        console.log(item);
        activeUsers.push({
          name: item.country,
          img: canada,
          value: parseInt(item.active_users),
        });
      });

      return activeUsers;
    })
    .catch((e) =>
      console.error(
        "There was an issue fetching the average engaged sessions data: " + e
      )
    );
};
