import React, { Component } from "react";
import "./sass/app.scss";

import TopSection from "./components/Top";
import BottomSection from "./components/Bottom";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="top-section">
            <TopSection />
          </div>
          <div className="bottom-section">
            <BottomSection />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
