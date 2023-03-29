import { Grid } from "@mui/material";
import "../card-stylings/comparison-list.css";
import {
  canada,
  india,
  unitedKingdom,
  unitedStates,
  france,
} from "../../../assets";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

    return (
      <>
        <TableContainer component={Paper} className="table">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <p className="normal-text">User</p>
                </TableCell>
                <TableCell align="left">
                  <p className="normal-text">Visitors</p>
                </TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.title}>
                  <TableCell>
                    <div className="horizontal-container">
                      <img className="flag-img" src={item.imageSource} />
                      <div className="item-headers">
                        <h4 className="medium-text">{item.title}</h4>
                        <p className="small-text-blue">{item.description}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="large-text-blue">{item.value}</p>
                  </TableCell>
                  <TableCell align="left">
                    <div
                      className="percent-box"
                      style={{
                        backgroundColor: item.isIncreased
                          ? "#03850040"
                          : "#B4000040",
                        color: item.isIncreased ? "#038500" : "#B40000",
                      }}
                    >
                      <p className="medium-text">
                        {item.isIncreased ? <>&#8593;</> : <>&#8595;</>}
                        {item.change}
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  };

  return (
    <Grid container className="statistics-card" direction="column">
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <h2 className="statistics-title">Most Active by Country</h2>
          <p className="small-text-blue">195 countries active this month</p>
        </Grid>
        <Grid item>
          <button className="view-all-btn">View All</button>
        </Grid>
      </Grid>
      <Grid container className="list-section">
        <Grid item xs={12}>
          {displayUsers()}
        </Grid>
      </Grid>
    </Grid>
  );
}
