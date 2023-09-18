import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Car from "./comp/w3code";
const elmt = document.getElementById("root");
const root = createRoot(elmt);
root.render(<Car />);
