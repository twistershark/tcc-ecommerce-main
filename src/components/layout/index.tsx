import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-nunito">
      <Header />
      <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
