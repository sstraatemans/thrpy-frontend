import styled from "styled-components";

export const Video = styled.video`
  ${props =>
    props.hasPhoto &&
    `
  display: none;
    `};
`;
