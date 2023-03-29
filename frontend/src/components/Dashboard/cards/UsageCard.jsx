import { Grid } from "@mui/material";
import "../card-stylings/usage-card.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

/* The data passed from props uses the following format:

title="title"
firstColumn="name"
secondColumn="name"
data={[
        {
          name: 'name',
          img: imageComponent || null,
          value: value
        },
        {
          name: 'name',
          img: imageComponent || null,
          value: value
        },
        ...
      ]}
*/

export function UsageCard(props) {
  const displayUsers = () => {
    const users = props.data;

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
            {users.map((row) => (
              <TableRow key={row.name}>
                <TableCell className="table-cell">
                  <div className="horizontal-container">
                    <img src={row.img} className="flag-img"></img>
                    <p className="medium-text text-margin">{row.name}</p>
                  </div>
                </TableCell>
                <TableCell align="left" className="table-cell">
                  <p className="medium-text-blue">{row.value}</p>
                </TableCell>
              </TableRow>
            ))}
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
