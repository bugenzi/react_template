import "styled-components";

type ISecondary = {
  "teal-900": string;
  "teal-800": string;
  "teal-700": string;
  "teal-600": string;
  "teal-500": string;
  "teal-400": string;
  "teal-300": string;
  "teal-200": string;
  "teal-100": string;
  "teal-000": string;
};
type IPrimary = {
  "gray-900": string;
  "gray-800": string;
  "gray-700": string;
  "gray-600": string;
  "gray-500": string;
  "gray-400": string;
  "gray-300": string;
  "gray-200": string;
  "gray-100": string;
  "gray-000": string;
};

interface ITextColor {
  textWhite: string;
  textGray: string;
  textDark: string;
}
interface ISpacing {
  S04: string;
  S08: string;
  S12: string;
  S16: string;
  S20: string;
  S24: string;
  S32: string;
  S40: string;
  S48: string;
  S56: string;
  S68: string;
  S72: string;
  S80: string;
}
// Theme structure
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    spacing: ISpacing;
    palette: {
      textColor: ITextColor;
      // these are neutral tones to be used for all purposed design rather than the main color palette
      common: {
        black: string;
        white: string;
        green: string;
        yellow: string;
        orange: string;
        red: string;
        pink: string;
        purple: string;
      };
      primary: IPrimary;
      secondary: ISecondary;
    };
  }
}
