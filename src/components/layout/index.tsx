import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer";

export function Layout() {
  return (
    <div className="ec-flex ec-flex-col ec-min-h-screen ec-font-nunito">
      <Header />
      <main className="ec-flex-1 ec-mx-auto ec-max-w-7xl ec-px-4 sm:ec-px-6 lg:ec-px-8 ec-w-full ec-py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
