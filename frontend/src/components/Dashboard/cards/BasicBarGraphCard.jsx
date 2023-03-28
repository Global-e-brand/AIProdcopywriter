import { Grid } from "@mui/material";
import "../card-stylings/basic-bar-graph-card.css";

export function BasicBarGraphCard() {
  return (
    <Grid container className="statistics-card" direction="column">
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <h2 className="statistics-title">Top Subcategories</h2>
          <p className="small-text-blue">1,234,567 Visitors</p>
        </Grid>
        <Grid item>
          <button className="view-all-btn">View All</button>
        </Grid>
      </Grid>
      <Grid container className="subject-list">
        <Grid item xs={6} className="subject">
          <p className="medium-text">Product Descriptions - 93%</p>
        </Grid>
        <Grid item xs={6} className="data-bar">
          <div className="data-bar-progress" style={{ width: "90%" }}>
            320,244
          </div>
        </Grid>
        <Grid item xs={6} className="subject">
          <p className="medium-text">Facebook Link Description - 84%</p>
        </Grid>
        <Grid item xs={6} className="data-bar">
          <div className="data-bar-progress" style={{ width: "80%" }}>
            289,252
          </div>
        </Grid>
        <Grid item xs={6} className="subject">
          <p className="medium-text">Landing Page Hero Text - 78%</p>
        </Grid>
        <Grid item xs={6} className="data-bar">
          <div className="data-bar-progress" style={{ width: "70%" }}>
            268,591
          </div>
        </Grid>
        <Grid item xs={6} className="subject">
          <p className="medium-text">Bullet Point to Blog Section - 61%</p>
        </Grid>
        <Grid item xs={6} className="data-bar">
          <div className="data-bar-progress" style={{ width: "60%" }}>
            210,053
          </div>
        </Grid>
        <Grid item xs={6} className="subject">
          <p className="medium-text">Resume Bullet Points - 54%</p>
        </Grid>
        <Grid item xs={6} className="data-bar">
          <div className="data-bar-progress" style={{ width: "50%" }}>
            185,948
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
