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

export const getAverageEngagedSessions = async () => {
  return await fetch("/dashboard/average-session-engagement-per-country")
    .then(async (raw) => {
      const data = await raw.json();

      let engagementDetails = [];

      data.map((item) => {
        engagementDetails.push({
          name: item.country,
          img: canada,
          value: parseFloat(
            Math.round(item.average_engagement_rate * 10000) / 100
          ),
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
