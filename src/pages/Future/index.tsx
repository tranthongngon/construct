import { Grid } from '@mui/material';
import Slider from './Slider';
import Section from './Section';
export default function Future() {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Slider />
                </Grid>
                <Grid item xs={12}>
                    <Section />
                </Grid>
            </Grid>
        </>
    );
}
