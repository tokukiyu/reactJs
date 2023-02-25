import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Menu from "./compononet/menuComponent";
import { DISHES } from "./shared/Dishes";
const elmt = document.getElementById("root");
const root = createRoot(elmt);
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES
        }
    }
  render() {
    return <div>
        <Menu dishes={this.state.dishes}/>
    </div>;
  }
}
root.render(<App  />);
