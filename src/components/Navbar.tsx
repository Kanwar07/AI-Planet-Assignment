import React from "react";
import logo from "../assets/icons/logo.svg";
function Navbar() {
  return (
    <div className="px-[10%] pb-4 cursor-pointer">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Navbar;
