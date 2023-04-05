import { Grid } from "@mui/material";
import "../card-stylings/overall-statistics.css";
import { dollar, subscribers, visits, users } from "../../../assets";

export function OverallStatistics(props) {
  return (
    <Grid container className="statistics-card" direction="row">
      <Grid item xs={12}>
        <Grid container justifyContent="space-between" alignItems="flex-end">
          <Grid item>
            <h2 className="statistics-title">Overall Statistics</h2>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="content-row " xs={12}>
        <Grid container justifyContent="space-between" spacing={2}>
          <Grid item className="statistic-container" xs={12} sm={6} md={3}>
            <img className="statistic-img" src={dollar} />
            <div className="statistic-data">
              <h4 className="statistic-value">-</h4>
              <p className="small-text-blue">Revenue</p>
            </div>
          </Grid>
          <Grid item className="statistic-container" xs={12} sm={6} md={3}>
            <img className="statistic-img" src={subscribers} />
            <div className="statistic-data">
              <h4 className="statistic-value">-</h4>
              <p className="small-text-blue">Subscriptions</p>
            </div>
          </Grid>
          <Grid item className="statistic-container" xs={12} sm={6} md={3}>
            <img
              className="statistic-img"
              src={visits}
              id="activeOneDayUserImg"
            />
            <div className="statistic-data">
              <h4 className="statistic-value">
                {props.activeOneDayUsersData
                  ? props.activeOneDayUsersData
                  : "-"}
              </h4>
              <p className="small-text-blue">Active One Day Users</p>
            </div>
          </Grid>
          <Grid item className="statistic-container" xs={12} sm={6} md={3}>
            <img className="statistic-img" src={users} />
            <div className="statistic-data">
              <h4 className="statistic-value">
                {props.users ? props.users : "-"}
              </h4>
              <p className="small-text-blue">users</p>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
