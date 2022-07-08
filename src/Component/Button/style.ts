/* eslint-disable no-shadow */
import styled from "styled-components";
import { ButtonProps } from "./type";

const Container = styled.button<ButtonProps>`
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  font-weight: 500;
  outline: none;
  transition: all 0.2s;
  background: ${(props) => props.color};
  /* color: ${(props) => props.theme.palette.primary["gray-000"]}; */
`;
export default Container;
