import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./comp/counters";
const elmt = document.getElementById("root");
const root = createRoot(elmt);
root.render(<Counters />);
