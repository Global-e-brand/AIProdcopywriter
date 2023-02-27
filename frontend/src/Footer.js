import { Grid } from "@mui/material";
import { footerlogo } from "./assets";


const Footer = () => {
    const year = new Date().getFullYear();

    return  <footer>
                <Grid container spacing={0} columns={16} justifyContent={"center"} alignItems={"center"}>
                    <Grid item xs={3}>
                        {`© ${year} AI ProdCopywriter`}
                    </Grid>

                    <Grid item xs={3}>
                        {`Smart Ecom Tech`}
                    </Grid>

                    <Grid item xs={4} >
                        <img
                            src={footerlogo}
                            alt="AI ProdCopywriter logo"
                        />
                    </Grid>

                    <Grid item xs={3}>
                        {/* {`(*Contact Detail*)`} */}
                    </Grid>

                    <Grid item xs={3}>
                        {`support@smartecomtech.com`}
                    </Grid>
                </Grid>
            </footer>;
};

export default Footer;


