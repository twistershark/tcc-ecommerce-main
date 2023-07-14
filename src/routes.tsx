import React from "react";
import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import { Layout } from "./components/layout";

import ProductsList from "products/ProductsList";
import ProductDetails from "productdetails/ProductDetails";
import Cart from "cart/Cart";

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductsList />} />
          <Route path="/produto/:id" element={<ProductDetails />} />
          <Route path="/carrinho" element={<Cart />} />
        </Route>
      </Router>
    </BrowserRouter>
  );
}
