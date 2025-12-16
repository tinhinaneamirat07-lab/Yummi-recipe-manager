import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Yummi</h2>
          <p>Your smart recipe manager.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#">Recipes</a>
          <a href="#">Planner</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Youtube</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Yummi — All rights reserved.</p>
      </div>
    </footer>
  );
}
