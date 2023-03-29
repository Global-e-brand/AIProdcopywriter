import { BetaAnalyticsDataClient } from "@google-analytics/data";

const propertyId = '358145246';  
const analyticsDataClient = new BetaAnalyticsDataClient();

export async function usersPieChart() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: '2023-01-01',
        endDate: 'today',
      },
     ],
    metrics: [
      {
        name: 'totalUsers',
      },
      {
        name:'newUsers'
      }
    ],
  });

  let usersDetail=[];
  response.rows.forEach(row => {
    usersDetail.push({
      users:Number(row.metricValues[0].value),
      new_users:Number(row.metricValues[1].value),
      total_users:Number(row.metricValues[0].value) + Number(row.metricValues[1].value)
    })
  });

  return usersDetail;
}

export async function usersByCountry() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: '2023-01-01',
        endDate: 'today',
      },
     ],
    dimensions: [
      {
        name: 'country',
      },
    ],
    metrics: [
      {
        name: 'totalUsers',
      },
    ],
  });

  let totalUsersByCountry=[];
  response.rows.forEach(row => {    
    totalUsersByCountry.push({
      country:row.dimensionValues[0].value,
      users:Number(row.metricValues[0].value),
    })
  });
  
  let top_five_country=totalUsersByCountry.slice(0,5); 
  top_five_country.push({total_country:Number(response.rows.length)})

  let usersByCountry=[
    {totalUsersByCountry:totalUsersByCountry},
    {top_five_country:top_five_country}
  ]
 
  return usersByCountry;  
}

export async function userConversionRate(){
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: '2023-01-01',
        endDate: 'today',
      },
     ],
     dimensions: [
      {
        name: 'country',
      },
    ],
    metrics: [
      {
        name: 'userConversionRate',
      },
    ],
  });

   let conversionrate =response.rowCount;
   return conversionrate;

}

export async function activeOneDayUsers(){
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: 'yesterday',
        endDate: 'today',
      },
     ],     
    metrics: [
      {
        name: 'active1DayUsers',
      },
    ],
  });

  let user=response.rows[0].metricValues[0].value;

  return user;
}
