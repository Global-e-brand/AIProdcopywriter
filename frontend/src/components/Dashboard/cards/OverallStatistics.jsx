import { Grid } from "@mui/material";
import "../card-stylings/overall-statistics.css";
import { dollar, subscribers, visits, users } from "../../../assets";

export function OverallStatistics() {
  return (
    <Grid container className="statistics-card" direction="row">
      <Grid item xs={12}>
        <Grid container justifyContent="space-between" alignItems="flex-end">
          <Grid item>
            <h2 className="statistics-title">Overall Statistics</h2>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="content-row" xs={12}>
        <Grid container justifyContent="space-between">
          <Grid item className="statistic-container">
            <img className="statistic-img" src={dollar} />
            <div className="statistic-data">
              <h4 className="statistic-value">0</h4>
              <p className="small-text-blue">Revenue</p>
            </div>
          </Grid>
          <Grid item className="statistic-container">
            <img className="statistic-img" src={subscribers} />
            <div className="statistic-data">
              <h4 className="statistic-value">0</h4>
              <p className="small-text-blue">Subscriptions</p>
            </div>
          </Grid>
          <Grid item className="statistic-container">
            <img className="statistic-img" src={visits} />
            <div className="statistic-data">
              <h4 className="statistic-value">1</h4>
              <p className="small-text-blue">Active One Day Users</p>
            </div>
          </Grid>
          <Grid item className="statistic-container">
            <img className="statistic-img" src={users} />
            <div className="statistic-data">
              <h4 className="statistic-value">$1,243,434</h4>
              <p className="small-text-blue">Users</p>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
