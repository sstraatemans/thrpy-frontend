// @flow
import React, { Component } from "react";
import {
  StyledModal,
  ModalContent,
  ModalFooter,
  ModalTitle,
  ModalWrapper,
  ModalOverlay
} from "./style";
import Button, { ButtonTypes } from "./../Button";

type Props = {
  isOpen: boolean,
  onDismiss: Function,
  onOk: Function,
  children: Array<any>
};

type State = {
  isClosing: boolean
};

class Modal extends Component<Props, State> {
  handleDismiss: Function;
  closeModal: Function;
  modal: any;
  constructor(props: Props) {
    super(props);

    this.state = {
      isClosing: false
    };
    this.handleDismiss = this.handleDismiss.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  handleDismiss() {
    this.setState({ isClosing: true });
    this.modal.addEventListener("animationend", this.closeModal);
  }

  closeModal() {
    this.props.onDismiss();
  }

  componentDidMount() {
    console.log("Did Mount");
  }
  componentWillUnmount() {
    console.log("gone?");
  }

  render() {
    return (
      <ModalWrapper>
        <ModalOverlay isClosing={this.state.isClosing} isOpen="true" />
        <StyledModal
          innerRef={comp => {
            this.modal = comp;
          }}
          isClosing={this.state.isClosing}
          isOpen="true"
        >
          <ModalContent>
            <ModalTitle>This is a title</ModalTitle>
            {this.props.children}
          </ModalContent>
          <ModalFooter>
            <Button onClick={this.handleDismiss} style={ButtonTypes.Flat}>
              Cancel
            </Button>
            <Button onClick={this.props.onOk} style={ButtonTypes.Flat}>
              Ok
            </Button>
          </ModalFooter>
        </StyledModal>
      </ModalWrapper>
    );
  }
}

export default Modal;
