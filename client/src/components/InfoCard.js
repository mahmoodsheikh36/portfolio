import React, { Component } from "react";

import "./InfoCard.css";

export default class InfoCard extends Component {
  render() {
    return (
      <div className="info_card">
        <img src={this.props.img} className="bordered"/>
        <h2 className="title highlighted">{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}
