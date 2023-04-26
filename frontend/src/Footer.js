import { Grid } from "@mui/material";
import { footerlogo } from "./assets";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Grid
        container
        className="footer"
        spacing={0}
        alignItems="center"
        columns={13}
      >
        <Grid
          item
          xs={4}
          sm={4}
          md={3}
          lg={3}
          xl={3}
          className="left-side-content"
        >
          {`© 2023 creativewriter.ai`}
        </Grid>

        <Grid
          item
          xs={2}
          sm={2}
          md={3}
          lg={3}
          xl={3}
          className="left-side-content"
        >
          {`Smart Ecom Tech`}
        </Grid>

        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <img
            className="footer-logo"
            src={footerlogo}
            alt="AI ProdCopywriter logo"
          />
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          className="right-side-content"
        >
          {`support@smartecomtech.com`}
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
