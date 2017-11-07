import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { Video } from "./style";
import Button from "./../Button";

type Props = {};
type State = {
  hasPhoto: boolean
};
class TakePhoto extends Component<Props, State> {
  takePicture: Function;
  clearPicture: Function;
  constructor(props: Props) {
    super(props);
    this.stream;
    this.video;
    this.state = {
      hasPhoto: false
    };

    this.takePicture = this.takePicture.bind(this);
    this.clearPicture = this.clearPicture.bind(this);
  }

  canCapture() {
    return navigator.getUserMedia;
  }

  errorCallback(e: SyntheticMouseEvent) {
    alert("no rights");
    console.error(e);
  }

  allowCallback() {
    this.video.srcObject = this.stream;
    this.video.play();
  }

  showVideo() {
    return (
      <div>
        <Video id="video" autoPlay="autoPlay" hasPhoto={this.state.hasPhoto} />
        <img id="photo" />
        <Button onClick={this.takePicture}>
          <FormattedMessage
            id={"scanner.take.photo"}
            defaultMessage={"Take photo"}
          />{" "}
        </Button>
        <Button onClick={this.clearPicture}>
          <FormattedMessage
            id={"scanner.clear.photo"}
            defaultMessage={"Clear photo"}
          />{" "}
        </Button>
        <canvas id="canvas" style={{ display: "none" }} />
      </div>
    );
  }

  takePicture(e) {
    let context = this.canvas.getContext("2d");
    this.canvas.width = 640;
    this.canvas.height = 480;
    context.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);

    let data = this.canvas.toDataURL("image/png");
    this.photo.setAttribute("src", data);

    this.setState({ hasPhoto: true });
  }

  clearPicture(e) {
    this.photo.setAttribute("src", null);
    this.setState({ hasPhoto: false });
  }

  componentDidMount() {
    this.video = document.querySelector("#video");
    this.canvas = document.querySelector("#canvas");
    this.photo = document.querySelector("#photo");
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(stream => {
        this.stream = stream;
        this.allowCallback();
      })
      .catch(e => this.errorCallback(e));
  }

  componentWillUnmount() {
    this.stream.getTracks().forEach(function(track) {
      track.stop();
    });
  }

  render() {
    if (!this.canCapture()) {
      return (
        <div>
          <FormattedMessage
            id={"scanner.no.user.media"}
            defaultMessage={
              "This device does not have the ability to for making photos"
            }
          />
        </div>
      );
    } else {
      return <div>{this.showVideo()}</div>;
    }
  }
}

export default TakePhoto;
