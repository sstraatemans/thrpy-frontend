import styled from "styled-components";
import { H4 } from "./../../style";

export const CardContainer = styled.div`
  position: relative;
  margin: 0.5rem 0 1rem 0;
  background-color: #fff;
  box-shadow: ${props => props.theme.boxShadow}
  border-radius: 2px;
`;

export const CardContent = styled.div`
  padding: 24px;
  border-radius: 0 0 2px 2px;
`;

export const CardTitle = styled.h4`
  display: block;
  line-height: 32px;
  margin-bottom: 8px;
  margin-top: 0;
  font-size: 24px;
  font-weight: 300;
`;
