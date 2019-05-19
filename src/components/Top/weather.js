import React from "react";

export default class Weather extends React.Component {
  state = {};
  render() {
    return (
      <div className="weather-container">
        <div className="header">Location Name</div>
        <div className="inner-container">
          <div className="image">IMG here</div>
          <div className="current-weather">10</div>
        </div>
        <div className="footer">Sunny</div>
      </div>
    );
  }
}
