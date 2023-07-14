import React from "react";
import { createRoot } from "react-dom/client";

import "tailwindcss/tailwind.css";

import { Routes } from "./routes";

const App = () => <Routes />;

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
