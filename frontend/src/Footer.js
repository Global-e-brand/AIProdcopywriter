import { Grid } from "@mui/material";
import { footerlogo } from "./assets";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Grid
        container
        spacing={0}
        columns={{ xs: 16, sm: 20 }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={3} sm={5}>
          {`© ${year} AI ProdCopywriter`}
        </Grid>

        <Grid item xs={3} sm={4}>
          {`Smart Ecom Tech`}
        </Grid>

        <Grid item xs={4} sm={2}>
          <img
            className="footerLogo"
            src={footerlogo}
            alt="AI ProdCopywriter logo"
          />
        </Grid>

        <Grid item xs={3} sm={1}>
          {/* {`(*Contact Detail*)`} */}
        </Grid>

        <Grid item xs={3} sm={8}>
          {`support@smartecomtech.com`}
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
