import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import "./app.css";
import Main from "./Class-compononet/MainComponent";
const elmt = document.getElementById("root");
const root = createRoot(elmt);

class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}
root.render(<App  />);
