import React from "react";
import { ThemeProvider } from "styled-components";

const breakpoints = {
    bigDesktop: 1440,
    desktop: 1150,
    bigTablet: 1020,
    tablet: 767,
    phone: 374,
    smallPhone: 340,
};
const device = {
    bigDesktop: `(min-width: ${breakpoints.bigDesktop})`,
    desktop: `(min-width: ${breakpoints.desktop})`,
    bigTablet: `(min-width: ${breakpoints.bigTablet})`,
    tablet: `(min-width: ${breakpoints.tablet})`,
    phone: `(min-width: ${breakpoints.phone})`,
    smallPhone: `(min-width: ${breakpoints.smallPhone})`,
};

const font = {
    family: ["sans-serif", "Roboto"],
    weight: {
        regular: "400",
        semibold: "500",
        bold: "700",
    },
    size: {
        header: {
            s: "2.7rem",
            m: "3.6rem",
        },
        body: {
            s: "1.22rem",
            m: "1.44rem",
        },
    },
};

const colors = {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
    red: "red",
};

const theme = {
    device,
    font,
    colors,
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
