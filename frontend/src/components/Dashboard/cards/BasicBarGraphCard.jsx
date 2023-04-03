import { Grid } from "@mui/material";
import "../card-stylings/basic-bar-graph-card.css";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 32,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const normalise = (value) => ((value - 0) * 100) / (1000 - 0);

function progressBar(variant, value) {
  return <BorderLinearProgress variant={variant} value={normalise(value)} />;
}

export function BasicBarGraphCard() {
  return (
    <Grid container className="statistics-card" direction="column">
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={8} sm={6} md={10} lg={10} xl={10}>
          <h2 className="statistics-title_">Top Subcategories</h2>
          <p className="small-text-blue">1,234,567 Visitors</p>
        </Grid>
        <Grid  item xs={8} sm={4} md={2} lg={2} xl={2} className="view-all-btn">
          <button className="view-all-btn">View All</button>
        </Grid>
      </Grid>
      <Grid container paddingTop={4}>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <p className="medium-text">Product Descriptions - 93%</p>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          {progressBar("determinate", 930)}
          {/* <p className="text-center">930</p> */}
        </Grid>
      </Grid>
    </Grid>
  );
}
