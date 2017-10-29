// @flow
import React from "react";
import { CheckBoxWrapper, CheckBox, CheckBoxBox, CheckboxLabel } from "./style";
import FormField from "./../../FormField";

type Props = {
  validationError: boolean,
  name: string,
  onChange: Function,
  onBlur: Function,
  val: boolean,
  children: Array<any>
};

const StyledCheckBox = (props: Props) => {
  return (
    <CheckBoxWrapper>
      <CheckboxLabel
        validationError={props.validationError ? "true" : ""}
        htmlFor={props.name}
      >
        <CheckBox
          type="checkbox"
          id={props.name}
          name={props.name}
          onChange={props.onChange}
          checked={props.val ? "checked" : ""}
        />
        <CheckBoxBox checked={props.val ? "checked" : ""} />
        {props.children}
      </CheckboxLabel>
    </CheckBoxWrapper>
  );
};

export const UnWrapped = StyledCheckBox;
export default FormField(StyledCheckBox);
