import React, { Component } from "react";
import ReactDOM from "react-dom";
import Editor from "for-editor";

class FEditor extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  handleChange(value) {
    this.setState({
      value
    });
  }

  render() {
    const { value } = this.state;
    return <Editor value={value} onChange={() => this.handleChange()} />;
  }
}

export default FEditor;
