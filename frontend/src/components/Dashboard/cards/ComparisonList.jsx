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

export function ComparisonList(props) {
  let users = props.data.slice(0,4);
  let total_country= props.data.length !== 0?props.data[5].total_country:"-";

  const displayUsers = () => {
    return (
      <>
        <TableContainer component={Paper} className="table">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" className="table-cell">
                  <p className="normal-text">User</p>
                </TableCell>
                <TableCell align="left" className="table-cell">
                  <p className="normal-text">Visitors</p>
                </TableCell>
                {/* <TableCell align="left" className="table-cell"></TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((item) => (
                <TableRow key={item.title}>
                  <TableCell className="table-cell">
                    <div className="horizontal-container">
                      {/* <img className="flag-img" src={item.imageSource} /> */}
                      <div className="item-headers">
                        <h4 className="medium-text">{item.country}</h4>
                        {/* <p className="small-text-blue">{12}</p> */}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="table-cell">
                    <p className="large-text-blue">{item.users}</p>
                  </TableCell>
                  {/* <TableCell align="left" className="table-cell">
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
                  </TableCell> */}
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
          <h2 className="statistics-title">Users by Country</h2>
          <p className="small-text-blue">{total_country} countries active</p>
        </Grid>
        {/* <Grid item>
          <button className="view-all-btn">View All</button>
        </Grid> */}
      </Grid>
      <Grid container className="list-section">
        <Grid item xs={12}>
          {displayUsers()}
        </Grid>
      </Grid>
    </Grid>
  );
}
