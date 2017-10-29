import styled from "styled-components";

export const CheckBoxWrapper = styled.div``;
export const CheckBox = styled.input`display: none;`;

export const CheckBoxBox = styled.span`
  position: relative;
  display: inline-block;
  top: 5px;
  margin-right: 30px;
  border: 1px solid ${props => props.theme.borderColor};
  background-color: #fbfbfb;
  width: 20px;
  height: 20px;

  cursor: pointer;

  &:after {
    ${props =>
      props.checked &&
      `
      display: inline-block;
      position: absolute;
      content: "";
      top: 0px;
      left: 2px;
      width: 22px;
      height: 10px;
      border: 3px solid ${props.theme.errorColor};
      border-top: 0;
      border-right: 0;

      transform: rotate(-45deg);
      `};
  }
`;
