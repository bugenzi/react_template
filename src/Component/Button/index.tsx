import React from "react";
import { Primary } from "../../Common/Style/colors";

import Container from "./style";
import { ButtonProps } from "./type";

export const Button = ({
  onClick,
  children,
  color = Primary["gray-800"],
  disabled,
}: ButtonProps): JSX.Element => (
  <Container onClick={onClick} color={color} disabled={disabled}>
    {children}
  </Container>
);
export default Button;
