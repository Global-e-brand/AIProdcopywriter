import { Grid } from "@mui/material";
import "../card-stylings/donut-chart-card.css";
import { DonutChart } from "../charts/DonutChart";

export function DonutChartCard(props) {
  //console.log("props_donut",props.usersPieChartData[0].users)
  //  let data=
  //  console.log("data",data);
  return (
    <Grid
      container
      className="statistics-card"
      direction="column"
      justifyContent="flex-start"
    >
      <Grid container justifyContent="space-between" alignItems="start">
        <Grid item>
          <div>
            <h2 className="statistics-title">{props.title}</h2>
            <p className="small-text-blue">{props.description}</p>
          </div>
        </Grid>
        <Grid item>
          <button className="view-all-btn">View All</button>
        </Grid>
      </Grid>
      <Grid item className="chart-container">
        {console.log("props.values",props.values)}
        <DonutChart
          values={props.values}
          labels={props.labels}
          colors={props.colors}
        />
      </Grid>
    </Grid>
  );
}
