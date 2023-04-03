// @flow
import { React, useEffect, useState } from "react";
import { ActiveUsers } from "./ActiveUsers";
import "./admin.css";
import { OverallStatistics } from "./cards/OverallStatistics";
import { BasicBarGraphCard } from "./cards/BasicBarGraphCard";
import { ComparisonCard } from "./cards/ComparisonCard";
import { DonutChartCard } from "./cards/DonutChartCard";
import { UsageCard } from "./cards/UsageCard";
import { Grid } from "@mui/material";
import { ActivityCard } from "./cards/ActivityCard";
import { AdvancedBarGraphCard } from "./cards/AdvancedBarGraphCard";
import { ComparisonList } from "./cards/ComparisonList";
import {
  getSessionEngagementByCountry,
  getActiveUsersByCountry,
} from "../../helpers/analyticsData";

export function AnalyticsDashboard(props) {
  const [activeOneDayUsersData, setActiveOneDayUsersData] = useState();
  const [topSubcategories, setTopSubcategories] = useState();
  const [usersPieChartData, setUsersPieChartData] = useState();
  const [engagementReport, setEngagementReport] = useState();
  const [userConversionData, setUserConversionData] = useState();
  const [usersByCountryData, setUsersByCountryData] = useState();
  const [totalResultRequests, setTotalResultRequests] = useState();
  const [requestsThisMonth, setRequestsThisMonth] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    try {
      async function getDashboard() {
        let res = await fetch("/dashboard", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        let response = res.json();
        // console.log("response", response)
        response.then((data) => {
          setActiveOneDayUsersData(data[0].activeOneDayUsersData);
          setUsers(data[2].usersPieChartData[0].total_users);
          setTopSubcategories(data[1].topSubcategories.topCategories);
          setUsersPieChartData(data[2].usersPieChartData);
          setEngagementReport(data[3].engagementReport);
          setUserConversionData(data[4].userConversionData);
          setUsersByCountryData(data[5].usersByCountryData[1].top_five_country);
          setTotalResultRequests();
          setRequestsThisMonth();
        });
      }
      getDashboard();
    } catch (e) {
      console.log("nodata");
    }
  }, []);

  return (
    <div className="analytics-dashboard">
      <Grid container spacing={2}>
        {/*OverallStatistics  */}
        <Grid item xs={12}>
          <OverallStatistics
            activeOneDayUsersData={activeOneDayUsersData}
            users={users}
          />
        </Grid>
        {/* Top Subcategories */}
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <BasicBarGraphCard topSubcategories={topSubcategories} />
        </Grid>
        {/* ComparisonCard for Requests*/}
        <Grid item xs={3}>
          <div className="stacked-cards">
            <Grid container direction="row" sx={{ height: "100%" }}>
              <Grid item xs={12} sx={{ paddingBottom: "16px" }}>
                <ComparisonCard
                  title="Total Result Requests"
                  value="1,234K"
                  percent={48.3}
                  increase={true}
                />
              </Grid>
              <Grid item xs={12} sx={{ paddingTop: "16px" }}>
                <ComparisonCard
                  title="Requests this month"
                  value="17.37%"
                  percent={11.7}
                  increase={false}
                />
              </Grid>
            </Grid>
          </div>
        </Grid>

        {/* Users */}
        <Grid item xs={3}>
          <DonutChartCard
            title="Users"
            colors={["#154B89", "#038500"]}
            labels={["Total Users", "New Users"]}
            values={[900, 80]}
          />
        </Grid>

        {/* Engaged Sessions Per Country */}
        <Grid item xs={6}>
          <UsageCard
            title="Engaged Sessions Per Country"
            firstColumn="Country"
            secondColumn="Sessions"
            // data={sessionEngagementData}
          />
        </Grid>

        {/* Active Users Per Country */}

        <Grid item xs={6}>
          <Grid container sx={{ height: "100%" }}>
            <Grid item xs={12} sx={{ paddingBottom: "32px" }}>
              <UsageCard
                title="Active Users Per Country"
                description="1,234,567 users this month"
                firstColumn="Country"
                secondColumn="Active Users"
                //data={activeUsersByCountry}
              />
            </Grid>

            {/* ComparisonCard for Users */}
            <Grid item xs={6} sx={{ paddingRight: "16px" }}>
              <ComparisonCard
                title="Users"
                value="1,234K"
                percent={48.3}
                increase={true}
              />
            </Grid>

            <Grid item xs={6} sx={{ paddingLeft: "16px" }}>
              <ComparisonCard
                title="User Conversion Rate"
                value="17.37%"
                percent={11.7}
                increase={false}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Subscriptions */}
        {/* <Grid item xs={5}>
          <DonutChartCard
            title="Subscriptions"
            colors={["#154B89", "#CB7A00"]}
            labels={["basic subscriptions", "standard subscriptions"]}
            values={[700, 200]}
          />
        </Grid> */}

        {/* Subscriptions by Country */}
        {/* <Grid item xs={7}>
          <AdvancedBarGraphCard colors={["#154B89", "#CB7A00"]} />
        </Grid> */}

        {/* Users by Country */}
        <Grid item xs={6}>
          <ComparisonList />
        </Grid>

        {/* Most Revenue by Country */}
        {/* <Grid item xs={6}>
          <DonutChartCard
            title="Most Revenue by Country"
            description="$1,243,434 total revenue"
            colors={[
              "#061B32",
              "#0F2C64",
              "#0236A4",
              "#1559E6",
              "#009CDF",
              "#717171",
            ]}
            labels={[
              "Canada",
              "India",
              "United States",
              "United Kingdom",
              "France",
              "Other",
            ]}
            values={[373030, 310858, 186515, 161646, 111909, 99476]}
          />
        </Grid> */}
      </Grid>
    </div>
  );
}
