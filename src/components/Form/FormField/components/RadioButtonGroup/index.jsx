// @flow
import React from "react";
import FormField from "./../../";
import StyledRadioButton from "./../RadioButton";
import { RadioButtonGroupWrapper } from "./style";

type Props = {
  validationError: boolean,
  name: string,
  onChange: Function,
  onBlur: Function,
  value: any,
  children: Array<any>
};

const RadioButtonGroup = (props: Props) => {
  return (
    <RadioButtonGroupWrapper>
      {props.children.map(child => (
        <StyledRadioButton
          key={`${props.name}${child.props.val}`}
          name={props.name}
          selected={props.value === child.props.val ? "selected" : ""}
          {...child.props}
        >
          {child.props.children}
        </StyledRadioButton>
      ))}
    </RadioButtonGroupWrapper>
  );
};

export const UnWrapped = RadioButtonGroup;
export default FormField(RadioButtonGroup);
