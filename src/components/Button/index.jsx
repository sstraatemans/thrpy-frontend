// @flow
import React from "react";
import { StyledButton } from "./style";

type Props = {
  children: Array<any>
};

const Button = (props: Props) => {
  return <StyledButton>{props.children}</StyledButton>;
};

export default Button;
