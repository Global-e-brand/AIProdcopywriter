import { Grid } from "@mui/material";
import "../card-stylings/usage-card.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";



export function UsageCard(props) {
  const displayUsers = () => {
    let users = props.data;

    return (
      <TableContainer component={Paper} className="table">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" className="table-cell">
                <p className="normal-text">{props.firstColumn}</p>
              </TableCell>
              <TableCell align="left" className="table-cell">
                <p className="normal-text">{props.secondColumn}</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length!==0?users.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="left" className="table-cell">
                  <div className="horizontal-container">
                    <img src={row.img} className="flag-img"></img>
                    <p className="medium-text text-margin">{row.country.value}</p>
                  </div>
                </TableCell>
                <TableCell align="left" className="table-cell">
                  <p className="large-text-blue">{row.sessions.value}</p>
                </TableCell>
              </TableRow>
            )):""}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <Grid container className="statistics-card" direction="column">
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <h2 className="statistics-title">{props.title}</h2>
          {props.description && (
            <p className="small-text-blue">{props.description}</p>
          )}
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
