// @flow
import {React,useEffect} from "react";
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

export function AnalyticsDashboard(props) {

  useEffect(()=>{
    const activeUser = async () => {
      let res=await fetch("/dashboard",{
     method: "GET",
     headers: {
       "Content-Type": "application/json",
     },
   });
   let response = res.json();
 };

 activeUser();
  },[])

  const activeUser = async () => {
    let res=await fetch("/dashboard",{
   method: "GET",
   headers: {
     "Content-Type": "application/json",
   },
 });
 let response = res.json();
};

  return (
    <div className="analytics-dashboard">
      {/* <ActiveUsers /> */}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <OverallStatistics />
        </Grid>
        <Grid item xs={6}>
          <BasicBarGraphCard />
        </Grid>
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
        <Grid item xs={3}>
          <DonutChartCard
            title="Users"
            colors={["#154B89", "#038500", "#B40000"]}
            labels={[
              "previously subscribed",
              "new subscribers",
              "recently cancelled",
            ]}
            values={[900, 80, 20]}
          />
        </Grid>
        <Grid item xs={6}>
          <UsageCard />
        </Grid>
        <Grid item xs={6}>
          <Grid container sx={{ height: "100%" }}>
            <Grid item xs={12} sx={{ paddingBottom: "32px" }}>
              <ActivityCard />
            </Grid>
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
                title="Conversion Rate"
                value="17.37%"
                percent={11.7}
                increase={false}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <DonutChartCard
            title="Subscriptions"
            colors={["#154B89", "#CB7A00"]}
            labels={["basic subscriptions", "standard subscriptions"]}
            values={[700, 200]}
          />
        </Grid>
        <Grid item xs={7}>
          <AdvancedBarGraphCard colors={["#154B89", "#CB7A00"]} />
        </Grid>
        <Grid item xs={6}>
          <ComparisonList />
        </Grid>
        <Grid item xs={6}>
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
        </Grid>
      </Grid>
    </div>
  );
};