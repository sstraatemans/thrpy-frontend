import styled from "styled-components";

export const Input = styled.input`
  display: block;
  height: 36px;
  width: 100%;
  border: none;
  border-radius: 0 !important;

  font-size: ${props => props.theme.fontSize};
  font-weight: 300;
  padding: 0 8px;
  background-color: transparent;
  box-shadow: none;
  border-bottom: 1px solid ${props => props.theme.borderColor};

  :focus,
  :valid {
    border-color: ${props => props.theme.borderColor};
    outline: none;
    box-shadow: none;

    ~ label {
      top: -20px;
      font-size: 14px;
      color: ${props => props.theme.primaryColor};
    }
  }

  :focus {
    ~ span {
      &:before,
      &:after {
        width: 50%;
      }
    }
  }

  ${props =>
    props.hasPlaceholder &&
    `
    ~ label {
      top: -20px;
      font-size: 14px;
      color: ${props => props.theme.primaryColor};
    }
    `} ${props =>
      props.validationError &&
      `
    color: ${props => props.theme.errorColor};
  `};
`;

export const InputFieldBar = styled.span`
  position: relative;
  display: block;
  width: 100%;

  &:before,
  &:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: ${props => props.theme.primaryColor};
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }
`;
