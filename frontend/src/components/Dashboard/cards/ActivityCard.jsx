import { Grid } from "@mui/material";
import "../card-stylings/activity-card.css";
import { canada } from "../../../assets";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export function ActivityCard() {
  const displayUsers = () => {
    const users = [{ name: "name1" }, { name: "name2" }, { name: "name3" }];

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
                  <p className="normal-text">Country</p>
                </TableCell>
                <TableCell align="left">
                  <p className="normal-text">Activity</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>
                    <h4 className="medium-text">{row.name}</h4>
                    <p className="small-text-blue">Registered: Jane 1, 2023</p>
                  </TableCell>
                  <TableCell>
                    <img className="flag-img" src={canada} />
                  </TableCell>
                  <TableCell align="left">
                    <h5 className="medium-text-blue">Last login</h5>
                    <p className="small-text-blue">5 sec ago</p>
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
          <h2 className="statistics-title">Active Users</h2>
          <p className="small-text-blue">1,234,567 users this month</p>
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
