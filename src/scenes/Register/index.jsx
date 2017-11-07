import React from "react";
import { Route } from "react-router-dom";
import Login from "./scenes/Login";
import Background from "./../../components/Background";

const Register = props => {
  console.log(props);
  return (
    <div>
      <Background />
      <Route path={`${props.match.url}`} component={Login} />
    </div>
  );
};

export default Register;
