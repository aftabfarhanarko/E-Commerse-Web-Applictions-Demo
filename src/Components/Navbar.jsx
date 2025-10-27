import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex gap-7 mx-auto w-8/12  text-2xl font-semibold">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/card">card</NavLink>
      <NavLink to="/">My Profile</NavLink>
    </div>
  );
};

export default Navbar;
