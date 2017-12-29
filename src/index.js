import React, {Component} from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./styles/main.scss";

import Display from "./components/clock";

class App extends Component {

  render() {
    return (
      <div>
        <Display />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
