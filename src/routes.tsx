import React from "react";
import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import { Layout } from "./components/layout";

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <div>
                <h1>Teste</h1>
              </div>
            }
          />
        </Route>
      </Router>
    </BrowserRouter>
  );
}
