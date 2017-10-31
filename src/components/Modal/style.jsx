import styled, { keyframes } from "styled-components";
import { H4 } from "./../../style";

export const ModalWrapper = styled.div``;
export const ModalOverlay = styled.div`
  position: fixed;
  display: block;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  z-index: 998;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 5vw;
  height: 5vw;
  background: #000;
  opacity: 0.5;

  animation-duration: 0.5s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
  animation-play-state: running;
  transform: translate(50vw, 50vh) scale(1);

  ${props =>
    props.isOpen &&
    !props.isClosing &&
    `
    animation-name: ${openOverlayAnimation};
    animation-direction: normal;
    display: block;
  `};

  ${props =>
    props.isClosing &&
    `
    transform: translate(50vw, 50vh) scale(40);
    animation-name: ${openOverlayAnimationReverse};
    animation-duration: 0.5s;
    animation-delay: 0.3s;
    animation-fill-mode: forwards;
    animation-play-state: running;
    display: block;
  `};
`;
export const StyledModal = styled.div`
  display: none;
  position: fixed;
  opacity: 1;
  left: 0;
  right: 0;
  background-color: #fafafa;
  padding: 0;
  max-height: 70%;
  width: 55%;
  margin: auto;
  overflow-y: auto;
  border-radius: 2px;
  z-index: 1000;
  transform-origin: center;

  box-shadow: ${props => props.theme.boxShadow};
  transform: scale(0.7, 1.2);
  animation-duration: 0.5s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
  animation-play-state: running;

  ${props =>
    props.isOpen &&
    !props.isClosing &&
    `
    opacity: 0;
    animation-name: ${openModalAnimation};
    animation-direction: normal;
    display: block;
  `};

  ${props =>
    props.isClosing &&
    `
    animation-name: ${openModalAnimationReverse};
    animation-duration: 0.5s;
    animation-delay: 0s;
    animation-fill-mode: forwards;
    animation-play-state: running;
    display: block;
  `};
`;

export const ModalContent = styled.div`padding: 24px;`;

export const ModalFooter = styled.div`
  border-radius: 0 0 2px 2px;
  background-color: #fafafa;
  padding: 4px 6px;
  height: 56px;
  width: 100%;
  text-align: right;

  a {
    margin: 6px 0;
  }
`;

export const ModalTitle = H4.extend``;

const openModalAnimation = keyframes`
  0% {
  }
  1% {
    display: bock;
    opacity: .5;
    transform: scale(0.7, 1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
`;

const openModalAnimationReverse = keyframes`
  0% {
    opacity: 1;
    transform: scale(1, 1);
  }
  99%{
    opacity: .5;
    transform: scale(0.7, 1.2);
  }
  100% {
    opacity: 0;
  }
`;

const openOverlayAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate(50vw, 50vh) scale(1);
  }
  100% {
    opacity: .5;
    transform: translate(50vw, 50vh) scale(40);
  }
`;

const openOverlayAnimationReverse = keyframes`
0% {
  transform: translate(50vw, 50vh) scale(40);
}
  1% {
    opacity: .5;
    transform: translate(50vw, 50vh) scale(40);
  }
  100% {
    opacity: 0;
    transform: translate(50vw, 50vh) scale(.2);

  }
`;
