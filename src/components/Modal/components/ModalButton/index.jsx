// @flow
import React, { Component } from "react";
import Button from "./../../../Button";
import Modal from "./../../";

type Props = {
  children: any
};
type State = {
  isOpen: boolean
};
class ModalButton extends Component<Props, State> {
  dismissHandler: Function;
  renderModal: Function;
  openModal: Function;
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.dismissHandler = this.dismissHandler.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  dismissHandler() {
    this.setState({ isOpen: false });
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  renderModal() {
    if (this.state.isOpen) {
      return (
        <Modal
          hasFixedFooter={true}
          onDismiss={this.dismissHandler}
          onOk={this.dismissHandler}
        >
          {this.props.children}
        </Modal>
      );
    }
    return;
  }

  render() {
    return (
      <div>
        <Button onClick={this.openModal}>Open modal</Button>
        {this.renderModal()}
      </div>
    );
  }
}

export default ModalButton;
