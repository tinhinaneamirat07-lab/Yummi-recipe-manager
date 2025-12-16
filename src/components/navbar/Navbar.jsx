import React from "react"
import './Navbar.css'; 



export default function Navbar() {
  
  return (
    <nav className="navbar">
      <h1 className="logo">Yummi</h1>

      <div className="links">
        <a href="#hero">Home</a>
        <a href="#recipes">Recipes</a>
        <a href="#planner">Planner</a>
      </div>

      
        <button className="start-btn">Sign in</button>
     
    </nav>
  );
}
