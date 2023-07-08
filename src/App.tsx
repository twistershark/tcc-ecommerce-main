import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import { Routes } from "./routes";

const App = () => <Routes />;
ReactDOM.render(<App />, document.getElementById("app"));
