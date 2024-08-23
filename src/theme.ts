'use client';
import {Montserrat} from "next/font/google";
import {createTheme, responsiveFontSizes} from "@mui/material";

const montserrat = Montserrat({
    weight: ['300', '400', '500', '700'], subsets: ['latin'], display: 'swap'
});

let theme = createTheme({
    typography: {
        fontFamily: montserrat.style.fontFamily
    },
    palette: {
        mode: "dark"
    }
});

theme = responsiveFontSizes(theme);

export default theme;