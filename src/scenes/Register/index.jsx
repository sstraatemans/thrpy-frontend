import React from "react";
import { Route } from "react-router-dom";
import { Col, Row } from "react-styled-flexboxgrid";
import Login from "./scenes/Login";
import Background from "./../../components/Background";

const Register = props => {
  console.log(props);
  return (
    <div>
      <Background />
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={6}>
              <Route path={`${props.match.url}`} component={Login} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
