import React from "react";
import { Link } from "react-router";

export const NavBar = () => {
  return (
    <div className="w-full h-10 bg-cyan-500 flex justify-center items-center gap-20 ">
      <Link to='/'>Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};
