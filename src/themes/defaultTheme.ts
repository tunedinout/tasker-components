import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  mode: "light",
  colors: {
    primary: {
      light: "#347ee3",
      dark: "#0d2b4a",
    },
    secondary: {
      light: "#e36e62",
      dark: "#4a130d",
    },
    accent: {
      light: "#BDC3C7",
    },
    text: {
      light: "#333333",
      dark: "#fff6f2",
    },
    default: {
      light: "#00aae0",
      dark: "#00aae0",
    },
  },
  fontWeight: {
    light: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    dark: {
      light: 200,
      regular: 400,
      medium: 600,
      bold: 800,
    },
  },
  fontFamily: "Roboto, Arial, sans-serif",
  fontSize: {
    small: "0.75rem",
    medium: "1rem",
    large: "1.25rem",
  },
  letterSpacing: {
    body: "0.015rem",
    text: "0.05rem"
  }
};

export default defaultTheme;
