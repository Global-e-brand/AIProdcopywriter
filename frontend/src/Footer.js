import { Grid } from "@mui/material";
import { logo } from "./assets";


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
                            src={logo}
                            alt="AI ProdCopywriter logo"
                        />
                    </Grid>

                    <Grid item xs={3}>
                        {`(*Contact Detail*)`}
                    </Grid>

                    <Grid item xs={3}>
                        {`(****Email Address****)`}
                    </Grid>
                </Grid>
            </footer>;
};

export default Footer;


