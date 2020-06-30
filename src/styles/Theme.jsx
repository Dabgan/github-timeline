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
    color: { main: "#FCC926", secondary: `#272727`, black: "#000000" },
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
            xs: "1rem",
            s: "1.22rem",
            m: "1.44rem",
        },
    },
};

const colors = {
    main: "#FCC926",
    secondary: "#0DFDC9",
    ternary: "#EF26FC",
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#0DFDC9",
    onyx: "#36313D",
    black: "#000000",
    lightBrown: "#B08600",
};

const theme = {
    device,
    font,
    colors,
    padding: {
        xs: "0.7rem",
        s: "1.5rem",
        m: "2.5rem",
        l: "4rem",
    },
    margin: {
        xs: "0.7rem",
        s: "2rem",
        m: "4rem",
        l: "8rem",
        xl: "13rem",
    },
    borderRadius: "10px",
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
