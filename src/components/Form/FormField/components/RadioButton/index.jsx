// @flow
import React from "react";
import {
  RadioButtonWrapper,
  RadioButton,
  RadioButtonBox,
  RadioButtonLabel
} from "./style";

type Props = {
  name: string,
  onChange: Function,
  children: Array<any>,
  val: any,
  selected: string
};

const StyledRadioButton = (props: Props) => {
  console.log(props);
  return (
    <RadioButtonWrapper>
      <RadioButtonLabel
        validationError={props.validationError ? "true" : ""}
        htmlFor={props.name}
      >
        <RadioButton
          type="radio"
          id={props.name}
          name={props.name}
          onChange={props.changeHandler}
          selected={props.selected}
          value={props.val}
        />
        <RadioButtonBox selected={props.selected} />
        {props.children}
      </RadioButtonLabel>
    </RadioButtonWrapper>
  );
};

export const UnWrapped = StyledRadioButton;
export default StyledRadioButton;
