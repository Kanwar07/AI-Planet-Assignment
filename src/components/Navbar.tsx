import React from "react";
import logo from "../assets/icons/logo.svg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <Link to="/">
      <div className="px-[10%] py-4 cursor-pointer">
        <img src={logo} alt="logo" />
      </div>
    </Link>
  );
}

export default Navbar;
