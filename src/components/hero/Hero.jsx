import React from "react";
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <h1>Cook Smarter</h1>
      <h1>Eat Better</h1>
      <h2>Make cooking easier. Save your favorite recipes, plan your meals, and organize your shopping.</h2>
      <input type="text" placeholder="Search recipes..." />
    </section>
  );
}
