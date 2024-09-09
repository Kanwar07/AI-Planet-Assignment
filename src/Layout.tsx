import React from "react";
import Navbar from "./components/Navbar.tsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="py-4">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
