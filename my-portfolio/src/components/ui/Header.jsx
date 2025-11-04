import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from './Navbar'
// import imageUrl from "../assets/images/avatar-icon.png";

export default function Header() {
  return (
    <Navbar />
    // <header>
    //   <NavLink className="site-logo" to="/">
    //     #VanLife
    //   </NavLink>
    //   <nav>
    //     <NavLink
    //       to="/host"
    //       className={({ isActive }) => (isActive ? "active-link" : null)}
    //     >
    //       Host
    //     </NavLink>
    //     <NavLink
    //       to="/about"
    //       className={({ isActive }) => (isActive ? "active-link" : null)}
    //     >
    //       About
    //     </NavLink>
    //     <NavLink
    //       to="/vans"
    //       className={({ isActive }) => (isActive ? "active-link" : null)}
    //     >
    //       Vans
    //     </NavLink>
    //   </nav>
    // </header>
  );
}
