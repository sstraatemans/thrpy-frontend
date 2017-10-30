// @flow
import React from "react";
import { Input, InputFieldBar } from "./style";
import { Label } from "./../../style";
import FormField from "./../../";

type Props = {
  validationError: boolean,
  id: string,
  name: string,
  value: string,
  onBlur: Function,
  onChange: Function,
  placeholder?: string,
  label: string
};

const TextInput = (props: Props) => {
  const renderLabel = () => {
    if (props.label) {
      return <Label htmlFor={props.name}>{props.label}</Label>;
    }
    return;
  };

  return (
    <div>
      <Input
        type="text"
        {...props}
        required="required"
        hasPlaceholder={props.placeholder ? true : false}
      />
      <InputFieldBar />
      {renderLabel()}
    </div>
  );
};

export const UnWrapped = TextInput;
export default FormField(TextInput);
