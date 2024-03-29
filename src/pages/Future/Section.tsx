import { Grid, Typography } from "@mui/material";
import Image_A from '../../assets/images/future_A.jpg';
import Image_B from '../../assets/images/future_B.jpg';
import Image_C from '../../assets/images/future_C.jpg';
import Image_D from '../../assets/images/future_D.jpg';
import Image_E from '../../assets/images/future_E.jpg';
import Image_F from '../../assets/images/future_F.jpg';
import FutureItem from "./FutureItem";

export default function Section() {
    return (
        <Grid container sx={{ mt: 2 }}>
            <Grid item xs={12} lg={6} md={12} sm={12} style={{ padding: "5px 30px" }}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, beatae repellendus! Aperiam, corporis quasi pariatur reiciendis eius, odit quaerat harum libero illo ea fugiat maxime laboriosam voluptates cum mollitia ad tempora aut, dignissimos quidem eum commodi a? Similique in rem nam esse repellat corporis dignissimos, voluptas voluptatem nisi velit nihil consectetur molestias placeat deserunt excepturi quisquam, molestiae magnam laboriosam sunt dolorem odit tempora, ad minus rerum! Rem est consequuntur eum quisquam aut, laborum architecto minima mollitia, quod error animi, debitis accusantium commodi. Quis exercitationem deserunt odit mollitia aspernatur consequatur reiciendis sit provident. Provident dicta optio vel. Mollitia vel in nihil?</p>
                <Grid sx={{ mt: 2 }}>
                    <Typography variant="h5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ab quo necessitatibus aliquam, eveniet, molestias rem quae cum nostrum impedit iure nihil sunt recusandae totam quos animi asperiores accusantium cumque.</Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={6} md={12} sm={12} style={{ display: 'flex', justifyContent: 'center' }}>
                <FutureItem image={Image_A} text="Future!" />
                <FutureItem image={Image_B} text="Future!" />
                <FutureItem image={Image_C} text="Future!" />
            </Grid>
            <Grid item xs={12} lg={6} md={12} sm={12} style={{ display: 'flex', justifyContent: 'center' }}>
                <FutureItem image={Image_D} text="Future!" />
                <FutureItem image={Image_E} text="Future!" />
                <FutureItem image={Image_F} text="Future!" />
            </Grid>
            <Grid item xs={12} lg={6} md={12} sm={12} style={{ padding: "5px 30px" }}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, beatae repellendus! Aperiam, corporis quasi pariatur reiciendis eius, odit quaerat harum libero illo ea fugiat maxime laboriosam voluptates cum mollitia ad tempora aut, dignissimos quidem eum commodi a? Similique in rem nam esse repellat corporis dignissimos, voluptas voluptatem nisi velit nihil consectetur molestias placeat deserunt excepturi quisquam, molestiae magnam laboriosam sunt dolorem odit tempora, ad minus rerum! Rem est consequuntur eum quisquam aut, laborum architecto minima mollitia, quod error animi, debitis accusantium commodi. Quis exercitationem deserunt odit mollitia aspernatur consequatur reiciendis sit provident. Provident dicta optio vel. Mollitia vel in nihil?</p>
                <Grid sx={{ mt: 2 }}>
                    <Typography variant="h5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ab quo necessitatibus aliquam, eveniet, molestias rem quae cum nostrum impedit iure nihil sunt recusandae totam quos animi asperiores accusantium cumque.</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
