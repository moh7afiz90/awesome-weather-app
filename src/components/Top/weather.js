import React from "react";

export default class Weather extends React.Component {
  render() {
    return (
      <div className="weather-container">
        <div className="header" />
        <div className="inner-container">
          <div className="image">IMG here</div>
          <div className="current-weather">10</div>
        </div>
        <div className="footer">Sunny</div>
      </div>
    );
  }
}
