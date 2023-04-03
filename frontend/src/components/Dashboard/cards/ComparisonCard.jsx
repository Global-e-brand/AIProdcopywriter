import { Grid } from "@mui/material";
import "../card-stylings/comparison-card.css";

export function ComparisonCard(props) {
  return (
    <Grid
      container
      direction="column"
      className={
        props.increase ? "gradient-background-green" : "gradient-background-red"
      }
    >
      <Grid container justifyContent="space-between" alignItems="start">
        <Grid item>
          <div>
            <h2 className="statistics-title">
              {props.value}
              {"  "}
                {/* <span
                  className="comparison-percent"
                  style={{ color: props.increase ? "#038500" : "#B40000" }}
                >
                  {`(${props.percent}%) `}
                  {props.increase ? <>&#8593;</> : <>&#8595;</>}
                </span> */}
            </h2>
          </div>
          <p className="small-text-blue">{props.title}</p>
        </Grid>
      </Grid>
    </Grid>
  );
}
