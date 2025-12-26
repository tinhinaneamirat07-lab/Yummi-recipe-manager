import React, { useState } from "react";
import "./Recipes.css";

export default function Recipes() {
  const [openId, setOpenId] = useState(null);

  const recipes = [
    {
      id: 1,
      title: "Banana Bread",
      desc: "Moist banana bread with walnuts",
      img: "public/Pics/Banana Loaf with Walnuts.jpg",
      time: "60 mins",
      servings: "6",
      level: "Easy",
      ingredients: <ul><li>Bananas</li><li>Flour</li><li>Butter</li></ul>,
      steps: "Mix ingredients and bake."
    },
    {
      id: 2,
      title: "Tiramisu",
      desc: "Classic Italian dessert",
      img: "public/Pics/Tiramisú Clásico .jpg",
      time: "30 mins",
      servings: "6",
      level: "Medium",
      ingredients: <ul><li>Mascarpone</li><li>Coffee</li></ul>,
      steps: "Layer cream and biscuits."
    },
    {
      id: 3,
      title: "Croissant",
      desc: "Buttery French pastry",
      img: "public/Pics/Best Bread In France In 2025.jpg",
      time: "3h",
      servings: "8",
      level: "Hard",
      ingredients: <ul><li>Butter</li><li>Flour</li></ul>,
      steps: "Laminate dough and bake."
    },
    {
      id: 4,
      title: "Cookies",
      desc: "Chewy chocolate cookies",
      img: "public/Pics/ChocolateChipCookies .jpeg",
      time: "25 mins",
      servings: "20",
      level: "Easy",
      ingredients: <ul><li>Chocolate</li><li>Butter</li></ul>,
      steps: "Bake until golden."
    },
    {
      id: 5,
      title: "Chourba Frik",
      desc: "Traditional Algerian soup 🇩🇿",
      img: "public/Pics/chourba frik .jpg",
      time: "60 mins",
      servings: "6",
      level: "Medium",
      ingredients: <ul><li>Frik</li><li>Meat</li></ul>,
      steps: "Simmer slowly."
    },
    {
      id: 6,
      title: "Ratatouille",
      desc: "French vegetable dish",
      img: "public/Pics/Spiral Ratatouille.jpg",
      time: "50 mins",
      servings: "4",
      level: "Medium",
      ingredients: <ul><li>Zucchini</li><li>Eggplant</li></ul>,
      steps: "Bake vegetables."
    },
    {
      id: 7,
      title: "Doughnuts",
      desc: "Soft chocolate donuts",
      img: "public/Pics/Chocolate Doughnuts.jpg",
      time: "40 mins",
      servings: "10",
      level: "Medium",
      ingredients: <ul><li>Cocoa</li></ul>,
      steps: "Bake or fry."
    },
    {
      id: 8,
      title: "Mushroom Soup",
      desc: "Creamy mushroom soup",
      img: "public/Pics/Velouté de Champignons Onctueux.jpg",
      time: "35 mins",
      servings: "4",
      level: "Easy",
      ingredients: <ul><li>Mushrooms</li></ul>,
      steps: "Cook and blend."
    },
  ];

  return (
    <section className="recipes" id="recipes">
      <h2 className="recipes-title">Featured Recipes</h2>

      <div className="recipes-grid">
        {recipes.map((r) => (
          <div key={r.id} className="recipe-card-new">

            <div className="image-wrap">
              <img src={r.img} alt={r.title} />
              <span className="level">{r.level}</span>
            </div>

            <div className="info">
              <h3>{r.title}</h3>
              <p>{r.desc}</p>

              <div className="meta">
                <span>⏱ {r.time}</span>
                <span>👥 {r.servings}</span>
              </div>

              <button onClick={() => setOpenId(r.id)}>
                View
              </button>
            </div>

            {openId === r.id && (
              <div className="recipe-overlay">
                <div className="overlay-content">
                  <button className="close-btn" onClick={() => setOpenId(null)}>✕</button>
                  <h3>{r.title}</h3>
                  <strong>Ingredients</strong>
                  {r.ingredients}
                  <strong>Steps</strong>
                  <p>{r.steps}</p>
                </div>
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
}
