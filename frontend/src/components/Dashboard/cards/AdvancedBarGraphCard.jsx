import { Grid } from "@mui/material";
import {
  canada,
  india,
  unitedKingdom,
  unitedStates,
  france,
} from "../../../assets";
import "../card-stylings/advanced-bar-graph-card.css";

export function AdvancedBarGraphCard(props) {
  const displaySubjects = () => {
    const subjects = [
      {
        imageSource: canada,
        title: "Canada",
        description: 564457,
        values: [188152, 365305],
      },
      {
        imageSource: india,
        title: "India",
        description: 531254,
        values: [332034, 199220],
      },
      {
        imageSource: unitedStates,
        title: "United States",
        description: 375003,
        values: [234377, 140626],
      },
      {
        imageSource: unitedKingdom,
        title: "United Kindom",
        description: 343753,
        values: [281253, 62500],
      },
      {
        imageSource: france,
        title: "France",
        description: 160625,
        values: [109376, 51250],
      },
    ];

    return subjects.map((subject) => {
      return (
        <Grid container marginY="10px" alignItems="center" columnSpacing={2}>
          <Grid item xs={2} className="cited-img">
            <img className="flag-img" src={subject.imageSource} />
            <div>{subject.title}</div>
            <div>{subject.description}</div>
          </Grid>
          <Grid item xs={10} className="relative-data-bar">
            <div
              className="relative-data-bar-item"
              style={{
                width: `${Math.floor((subject.values[0] / 564457) * 100)}%`,
                backgroundColor: props.colors[0],
              }}
            >
              {subject.values[0]}
            </div>
            <div
              className="relative-data-bar-item"
              style={{
                width: `${Math.floor((subject.values[1] / 564457) * 100)}%`,
                backgroundColor: props.colors[1],
              }}
            >
              {subject.values[1]}
            </div>
          </Grid>
        </Grid>
      );
    });
  };

  return (
    <Grid container className="statistics-card" direction="column">
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <h2 className="statistics-title">Most Subscriptions by Country</h2>
          <p className="small-text-blue">195 countries have subscribers</p>
        </Grid>
        <Grid item className="color-legend-item">
          <div
            className="color-legend-icon"
            style={{ backgroundColor: props.colors[0] }}
          ></div>
          <span style={{ color: props.colors[0] }}>Basic</span>
        </Grid>
        <Grid item className="color-legend-item">
          <div
            className="color-legend-icon"
            style={{ backgroundColor: props.colors[1] }}
          ></div>
          <span style={{ color: props.colors[1] }}>Standard</span>
        </Grid>
        <Grid item>
          <button className="view-all-btn">View All</button>
        </Grid>
      </Grid>
      <Grid container className="subject-list">
        {displaySubjects()}
      </Grid>
    </Grid>
  );
}
