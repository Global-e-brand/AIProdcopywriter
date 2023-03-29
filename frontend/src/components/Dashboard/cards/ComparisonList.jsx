import { Grid } from "@mui/material";
import "../card-stylings/comparison-list.css";
import {
  canada,
  india,
  unitedKingdom,
  unitedStates,
  france,
} from "../../../assets";

export function ComparisonList() {
  const displayUsers = () => {
    const items = [
      {
        imageSource: canada,
        title: "Canada",
        description: "2535246 visits",
        change: "63%",
        value: "825367",
        isIncreased: true,
      },
      {
        imageSource: india,
        title: "India",
        description: "1678325 visits",
        change: "49%",
        value: "408254",
        isIncreased: true,
      },
      {
        imageSource: unitedStates,
        title: "United States",
        description: "1204249 visits",
        change: "3.1%",
        value: "394492",
        isIncreased: false,
      },
      {
        imageSource: unitedKingdom,
        title: "United Kindom",
        description: "935242 visits",
        change: "17%",
        value: "245241",
        isIncreased: true,
      },
      {
        imageSource: france,
        title: "France",
        description: "632475 visits",
        change: "1.7%",
        value: "157266",
        isIncreased: false,
      },
    ];

    return items.map((item) => {
      return (
        <>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={7}>
              <Grid container direction="row" alignItems="center">
                <img className="flag-img" src={item.imageSource} />
                <div className="item-headers">
                  <h4 className="medium-text">{item.title}</h4>
                  <p className="small-text-blue">{item.description}</p>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <p className="large-text-blue">{item.value}</p>
            </Grid>
            <Grid item xs={2}>
              <div
                className="percent-box"
                style={{
                  backgroundColor: item.isIncreased ? "#03850040" : "#B4000040",
                  color: item.isIncreased ? "#038500" : "#B40000",
                }}
              >
                <p className="medium-text">
                  {item.isIncreased ? <>&#8593;</> : <>&#8595;</>}
                  {item.change}
                </p>
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
          <h2 className="statistics-title">Users by Country</h2>
          <p className="small-text-blue">195 countries active</p>
        </Grid>
        <Grid item>
          <button className="view-all-btn">View All</button>
        </Grid>
      </Grid>
      <Grid container className="list-section">
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={7}>
              User
            </Grid>
            <Grid item xs={5}>
              Visitors
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
