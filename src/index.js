import React, {Component} from "react";
import ReactDOM from "react-dom";

import Display from "./components/display";

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
