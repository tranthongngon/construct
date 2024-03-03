import { createTheme } from "@mui/material";
import breakpoints from "./base/breakpoints";
import palette from "./base/palette";
import typography from "./base/typography";
const themes = createTheme({
    breakpoints: {...breakpoints},
    palette: {...palette},
    typography: {...typography}
});

export default themes;
