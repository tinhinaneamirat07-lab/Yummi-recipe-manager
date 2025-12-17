import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Yummi</h1>

      <div className="links">
        <a href="#hero">Home</a>
        <a href="#recipes">Recipes</a>

        {/* ✅ PLANNER PAGE */}
        <Link to="/planner">Planner</Link>
      </div>

      <Link to="/login" className="start-btn">
        Sign in
      </Link>
    </nav>
  )
}