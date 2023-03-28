import { Grid } from "@mui/material";
import "../card-stylings/usage-card.css";
import { canada } from "../../../assets";

export function UsageCard() {
  const displayUsers = () => {
    const users = [
      "Random Username1",
      "Random Username2",
      "Random Username3",
      "Random Username4",
      "Random Username5",
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
              <div className="data-bar-info">
                <h5 className="data-bar-value">91%</h5>
                <p className="data-bar-description">
                  Jan 1, 2023 - Jan 31, 2023
                </p>
              </div>
              <div className="data-bar-slim">
                <div
                  className="data-bar-slim-progress"
                  style={{ width: "90%" }}
                ></div>
              </div>
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
          <h2 className="statistics-title">Most Recurring Users</h2>
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
              Usage
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
