
import { createTheme } from "@mui/material/styles";


const appMaterialTheme = createTheme({
    palette: {
        primary: {
            main: "#3D5D0A",
        },
        secondary: {
            main: "#5DC269",
        },
    },
    typography: {
        fontFamily: [
            '"Lato"', 
            '"Roboto"', 
            "sans-serif"
        ].join(","),
    }
});

export default appMaterialTheme;
