// @flow
import React from "react";
import { StyledButton, FlatButton } from "./style";

export const ButtonTypes = {
  Normal: "Normal",
  Flat: "Flat"
};
type ButtonType = $Keys<typeof ButtonTypes>;

type Props = {
  onClick: Function,
  style?: ButtonType,
  children: any
};

const defaultProps = { style: "Normal" };

const Button = (props: Props) => {
  if (props.style === ButtonTypes.Flat) {
    return <FlatButton onClick={props.onClick}>{props.children}</FlatButton>;
  }
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};

export default Button;
