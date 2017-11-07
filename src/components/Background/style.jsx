import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url(${props => props.img}) no-repeat center center fixed;
  background-size: cover;
`;
