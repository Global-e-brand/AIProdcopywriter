import { Grid } from "@mui/material";
import { footerlogo } from "./assets";

const Footer = () => {
  return (
    <footer>
      <Grid
        container
        spacing={0}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          {`© 2023 AI ProdCopywriter`}
        </Grid>

        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          {`Smart Ecom Tech`}
        </Grid>

        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          <img
            className="footerLogo"
            src={footerlogo}
            alt="AI ProdCopywriter logo"
          />
        </Grid>

        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          {/* {`(*Contact Detail*)`} */}
        </Grid>

        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          {`support@smartecomtech.com`}
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
