import React, { Component } from "react";

import "./Section.css";

export default class Section extends Component {
  render() {
    const reverseOnWrap = this.props.reverseOnWrap || false;
    console.log(reverseOnWrap);
    return (
      <div className={reverseOnWrap ? "section wrap_reverse" : "section"}>
        {this.props.children}
      </div>
    );
  }
}
