/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import { Primary, Secondary } from "../../Common/Style/colors";

/* eslint-disable no-shadow */
export enum VARIANT {
  PRIMARY,
  SECONDARY,
}

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: React.ReactNode; // make the component able to receive children elements
  disabled?: boolean; // make the button disabled or not
  variant?: VARIANT;
  color?: Primary | Secondary;
  icon?: JSX.Element;
};
