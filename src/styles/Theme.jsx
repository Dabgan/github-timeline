import React from "react";
import { ThemeProvider } from "styled-components";

const breakpoints = {
    bigDesktop: `1440px`,
    desktop: `1150px`,
    tablet: `1024px`,
    phone: `420px`,
    smallPhone: `330px`,
};
const device = {
    bigDesktop: `only screen and (max-width: ${breakpoints.bigDesktop})`,
    desktop: `only screen and (max-width: ${breakpoints.desktop})`,
    tablet: `only screen and (max-width: ${breakpoints.tablet})`,
    phone: `only screen and (max-width: ${breakpoints.phone})`,
    smallPhone: `only screen and (max-width: ${breakpoints.smallPhone})`,
};

const font = {
    family: { main: "'Pangolin', cursive;" },
    color: { main: "#e0b019", secondary: `#f5f5f5`, black: "#000000" },
    weight: {
        regular: "400",
        semibold: "500",
        bold: "700",
    },
    size: {
        header: {
            xs: "1.9rem",
            s: "2.7rem",
            m: "3.6rem",
            xl: "10rem",
        },
        body: {
            xs: "0.8rem",
            s: "1rem",
            m: "1.22rem",
            l: "1.44rem",
        },
    },
};

const colors = {
    main: "#FCC926",
    secondary: "#0dbf99",
    background: "#141416",
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#0DFDC9",
    coralBlue: "#1AB090",
    onyx: "#36313D",
    black: "#000000",
    grey: "#31363F",
    lightBrown: "#B08600",
    error: "#ff311f",
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
        xs: "0.6rem",
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
