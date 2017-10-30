import styled from "styled-components";
import { Label } from "./../../style";

export const CheckBoxWrapper = styled.div`margin-bottom: -20px;`;
export const CheckBox = styled.input`
  width: auto;
  opacity: 0.0000001;
  position: absolute;
  left: 0;
`;

export const CheckBoxBox = styled.span`
  color: props.theme.borderColor};
  position: absolute;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  border: 0.125rem solid currentColor;
  border-radius: 0.0625rem;
  transition: border-color 0.28s ease;

  :before,
  :after {
    position: absolute;
    height: 0;
    width: 0.2rem;
    background-color: ${props => props.theme.primaryColor};
    display: block;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    border-radius: 0.25rem;
    content: "";
    transition: opacity 0.28s ease, height 0s linear 0.28s;
    opacity: 0;
  }

  :before {
    top: 0.65rem;
    left: 0.38rem;
    transform: rotate(-135deg);
    box-shadow: 0 0 0 0.0625rem #fff;
  }

  :after {
    top: 0.3rem;
    left: 0;
    transform: rotate(-45deg);
  }

  ${props =>
    props.checked &&
    `
      color: ${props => props.theme.primaryColor};

      :after,:before{
        opacity: 1;
transition: height 0.28s ease;
      }

      :before {
        height: 16px;
        transition-delay: 0.28s;
      }

      :after {
        height: 8px;
      }
    `};
`;

export const CheckboxLabel = Label.extend`
  position: relative;
  cursor: pointer;
  pointer-events: auto;
  padding-left: 2rem;
  display: block;
`;
