//@flow

import React, { Component } from "react";
import Card from "./../../../../components/Card";
import Form from "./../../../../components/Form";
import TextInput from "./../../../../components/Form/FormField/components/TextInput";
import Button from "./../../../../components/Button";

type Props = {
  children: any
};
type State = {
  email: string
};
class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return <Card title="Sign up for Thrpy" />;
  }
}

export default Login;
