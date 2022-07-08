/* eslint-disable no-shadow */
// theme.ts
import { DefaultTheme } from "styled-components";
import { Primary, Secondary } from "./colors";

const defaultTheme: DefaultTheme = {
  borderRadius: "4px",
  spacing: {
    S04: "4px",
    S08: "8px",
    S12: "12px",
    S16: "16px",
    S20: "20px",
    S24: "24px",
    S32: "32px",
    S40: "40px",
    S48: "48px",
    S56: "56px",
    S68: "68px",
    S72: "72px",
    S80: "80px",
  },
  palette: {
    textColor: {
      textWhite: "#F0F6FC",
      textGray: "#8B939E",
      textDark: "#6E7681",
    },
    common: {
      black: "#222831",
      white: "#ffffff",
      green: "#04260F",
      yellow: "#341A00",
      orange: "#3D1300",
      red: "#3C1210",
      pink: "#3C1210",
      purple: "#271051",
    },
    primary: Primary,
    secondary: Secondary,
  },
};

export default defaultTheme;
