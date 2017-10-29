import styled from "styled-components";

export const InputFieldWrapper = styled.div`
  font-family: ${props => props.theme.fontFamily};
  position: relative;
  margin-top: 35px;
  margin-bottom: 20px;
`;

export const FormFieldError = styled.div`
  font-size: 12px;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => props.theme.errorColor};
`;

export const Label = styled.label`
  color: ${props => props.theme.labelColor};
  font-size: ${props => props.theme.fontSize};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;
