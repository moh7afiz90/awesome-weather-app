import React from "react";
import Weather from "./weather";
import "./Style.scss";

export default class TopSection extends React.Component {
  state = {};

  render() {
    return (
      <div className="top-container">
        <div className="title">Weather Up</div>
        <Weather />
      </div>
    );
  }
}
