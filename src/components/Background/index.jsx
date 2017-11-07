//@flow
import React, { Component } from "react";
import { BackgroundWrapper } from "./style";

type Props = {};
type State = {
  img: number
};
class Background extends Component<Props, State> {
  getImage: Function;
  setImage: Function;

  constructor(props: Props) {
    super(props);

    this.state = {
      img: 5
    };

    this.getImage = this.getImage.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  componentWillMount() {
    this.setImage();
  }

  setImage(): void {
    let numb: number = parseInt(sessionStorage.getItem("backimage"));
    if (!numb) {
      numb = Math.round(Math.random() * 22);
      this.setState({ img: numb });
      sessionStorage.setItem("backimage", `${numb}`);
    }

    this.setState({ img: numb });
  }
  getImage(): string {
    return `images/back/${this.state.img}.jpg`;
  }
  render() {
    return <BackgroundWrapper img={this.getImage()} />;
  }
}

export default Background;
