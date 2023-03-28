import { Grid } from "@mui/material";
import "../card-stylings/activity-card.css";
import { canada } from "../../../assets";

export function ActivityCard() {
  const displayUsers = () => {
    const users = [
      "Random Username1",
      "Random Username2",
      "Random Username3",
      // "Random Username4",
      // "Random Username5",
    ];

    return users.map((user) => {
      return (
        <>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={4}>
              <h4 className="medium-text">{user}</h4>
              <p className="small-text-blue">Registered: Jane 1, 2023</p>
            </Grid>
            <Grid item xs={3}>
              <img className="flag-img" src={canada} />
            </Grid>
            <Grid item xs={5}>
              <h5 className="medium-text-blue">Last login</h5>
              <p className="small-text-blue">5 sec ago</p>
            </Grid>
          </Grid>
          <hr />
        </>
      );
    });
  };

  return (
    <Grid container className="statistics-card" direction="column">
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <h2 className="statistics-title">Active Users</h2>
          <p className="small-text-blue">1,234,567 users this month</p>
        </Grid>
        <Grid item>
          <button className="view-all-btn">View All</button>
        </Grid>
      </Grid>
      <Grid container className="list-section">
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={4}>
              User
            </Grid>
            <Grid item xs={3}>
              Country
            </Grid>
            <Grid item xs={5}>
              Activity
            </Grid>
          </Grid>
          <hr />
        </Grid>
        <Grid item xs={12}>
          {displayUsers()}
        </Grid>
      </Grid>
    </Grid>
  );
}
