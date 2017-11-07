import styled, { keyframes } from "styled-components";

export const StyledButton = styled.a`
  position: relative;
  display: inline-block;
  padding: 0 2rem;
  overflow: hidden;
  z-index: 1;

  font-family: ${props => props.theme.fontFamily};
  text-decoration: none;
  color: #fff;
  background-color: ${props => props.theme.primaryColor};
  text-align: center;
  letter-spacing: 0.5px;
  transition: 0.2s ease-out;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  height: 36px;
  line-height: 36px;
  text-transform: uppercase;
  user-select: none;
  box-shadow: ${props => props.theme.boxShadow};
  transition: 0.3s ease-out;
`;

export const FlatButton = StyledButton.extend`
  box-shadow: none;
  background-color: transparent;
  color: #343434;
`;
