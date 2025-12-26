import React from "react"
import "./Navbar.css"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <h1 className="logo">Yummi</h1>

      <div className="links">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </Link>

        <a href="#recipes">Recipes</a>

        {/* PLANNER */}
        <Link
          to="/planner"
          className={location.pathname === "/planner" ? "active" : ""}
        >
          Planner
        </Link>

        {/* PROFILE */}
        <Link
          to="/profile"
          className={location.pathname === "/profile" ? "active" : ""}
        >
          Profile
        </Link>
      </div>

      <Link to="/login" className="start-btn">
        Sign in
      </Link>
    </nav>
  )
}
