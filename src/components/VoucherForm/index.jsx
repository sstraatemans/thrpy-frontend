// @flow
import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import Form from "./../Form";
import TextInput from "./../Form/FormField/components/TextInput";
import Button from "./../Button";
import Card from "./../Card";
import StyledCheckBox from "./../Form/FormField/components/CheckBox";
import StyledRadioButton from "./../Form/FormField/components/RadioButton";
import { ButtonBar } from "./../Button/style";

import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

type Props = {};
type State = {
  firstName: string,
  lastName: string,
  email: string,
  terms: boolean,
  isLoading: boolean
};
class VoucherForm extends Component<Props, State> {
  handleSubmit: Function;

  constructor(props: Props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      terms: false,
      isLoading: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //submit form and check API
  handleSubmit(model: any) {
    this.setState({ isLoading: true });
    this.setState(model);

    console.log("submit is done");
    return;
  }

  render() {
    return (
      <div>
        <Card />
        <FormattedMessage
          id={"Header.greeting"}
          defaultMessage={"Welcome to your dashboard, {name}!"}
          values={{ name: "steven" }}
        />

        <TextInput
          label="First name"
          name="firstName"
          value="steven"
          validation={{
            minLength: 2,
            isAlphaOnly: true
          }}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(VoucherForm);
