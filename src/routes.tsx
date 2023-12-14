import React from "react";
import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import { Layout } from "./components/layout";

import HomePage from "products/HomePage";
import Catalog from "products/Catalog";
import ProductDetails from "productdetails/ProductDetails";
import Cart from "cart/Cart";
import Checkout from "checkout/Checkout";
import OrderComplete from "checkout/OrderComplete";

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/produtos" element={<Catalog />} />
          <Route path="/produto/:id" element={<ProductDetails />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/pagamento" element={<Checkout />} />
          <Route path="/pedido-realizado" element={<OrderComplete />} />
        </Route>
      </Router>
    </BrowserRouter>
  );
}
