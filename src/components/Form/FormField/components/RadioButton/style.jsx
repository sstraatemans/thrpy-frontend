import styled from "styled-components";
import { Label } from "./../../style";

export const RadioButtonWrapper = styled.div`
  font-family: ${props => props.theme.fontFamily};
  margin: 20px 0;
`;
export const RadioButton = styled.input`
  width: auto;
  opacity: 0.00000001;
  position: absolute;
  left: 0;
`;

export const RadioButtonLabel = Label.extend`
  position: relative;
  cursor: pointer;
  pointer-events: auto;
  padding-left: 2rem;
  display: block;
`;

export const RadioButtonBox = styled.span`
  position: absolute;
  top: -0.25rem;
  left: -0.25rem;
  cursor: pointer;
  display: block;
  font-size: 1rem;
  user-select: none;
  color: #999;

  :before,
  :after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    margin: 0.25rem;
    width: 12px;
    height: 12px;
    transition: -webkit-transform 0.28s ease;
    transition: transform 0.28s ease;
    transition: transform 0.28s ease, -webkit-transform 0.28s ease;
    border-radius: 50%;
    border: 0.125rem solid currentColor;
  }

  :after {
    transform: scale(0);
    background-color: #337ab7;
    border-color: #337ab7;
  }

  ${props =>
    props.selected &&
    `
      :before{
        color: #337ab7;
      }

      :after{
        transform: scale(0.5);
      }
    `};
`;
