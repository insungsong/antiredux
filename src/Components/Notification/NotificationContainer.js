import React, { Component } from "react";
import NotificationPresenter from "./NotificationPresenter";

class NotificationContainer extends Component {
  constructor(props) {
    super(props);
    console.log("what the fuck", props);
  }
  static propTypes = {};
  state = {};
  render() {
    return <NotificationPresenter {...this.props} {...this.state} />;
  }
}

export default NotificationContainer;
