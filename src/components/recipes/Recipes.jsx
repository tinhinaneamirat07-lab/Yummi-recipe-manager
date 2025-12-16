import React, { useState } from "react";
import "./Recipes.css";

export default function Recipes() {

  const recipes = [
    {
      id: 1,
      title: "Banana Bread",
      desc: "Moist homemade banana bread with walnuts",
      img: "src/assets/pics/banana.jpg",
      time: "60 mins",
      servings: "6 servings",
      level: "Easy",
      ingredients: (
        <ul>
          <li>3 ripe bananas</li>
          <li>Butter</li>
          <li>Sugar</li>
          <li>Egg</li>
          <li>Flour</li>
        </ul>
      ),
      steps: "Mash bananas, mix ingredients, bake 60 minutes."
    },
    {
      id: 2,
      title: "Tiramisu Clasico",
      desc: "Classic Italian dessert with mascarpone",
      img: "src/assets/pics/tiramisu.jpg",
      time: "30 mins",
      servings: "6 servings",
      level: "Medium",
      ingredients: (
        <ul>
          <li>Mascarpone</li>
          <li>Eggs</li>
          <li>Coffee</li>
          <li>Ladyfingers</li>
        </ul>
      ),
      steps: "Layer cream and coffee-soaked biscuits."
    },
    {
      id: 3,
      title: "Blackout Cake",
      desc: "Rich and intense chocolate cake",
      img: "src/assets/pics/BlackoutCake.jpg",
      time: "90 mins",
      servings: "8 servings",
      level: "Hard",
      ingredients: (
        <ul>
          <li>Cocoa</li>
          <li>Butter</li>
          <li>Eggs</li>
          <li>Flour</li>
        </ul>
      ),
      steps: "Bake layers and frost with chocolate."
    },

    {
      id: 4,
      title: "Chocolate Chip Cookies",
      desc: "Chewy cookies with chocolate chips",
      img: "src/assets/pics/ChocolateChipCookies .jpeg",
      time: "25 mins",
      servings: "20 cookies",
      level: "Easy",
      ingredients: <ul><li>Butter</li><li>Sugar</li><li>Chocolate</li></ul>,
      steps: "Mix dough and bake."
    },

    {
      id: 5,
      title: "Sourdough Bread",
      desc: "Traditional fermented sourdough loaf",
      img: "src/assets/pics/Sourdough .jpeg",
      time: "24h",
      servings: "1 loaf",
      level: "Hard",
      ingredients: <ul><li>Starter</li><li>Flour</li><li>Water</li></ul>,
      steps: "Ferment overnight and bake."
    },

    {
      id: 6,
      title: "Croissant",
      desc: "Buttery flaky French croissant",
      img: "src/assets/pics/france.jpg",
      time: "3h",
      servings: "8 croissants",
      level: "Hard",
      ingredients: <ul><li>Butter</li><li>Flour</li><li>Milk</li></ul>,
      steps: "Laminate dough and bake."
    },

    {
      id: 7,
      title: "Cinnamon Rolls",
      desc: "Soft rolls with cinnamon sugar",
      img: "src/assets/pics/cina.jpg",
      time: "2h",
      servings: "12 rolls",
      level: "Medium",
      ingredients: <ul><li>Cinnamon</li><li>Sugar</li><li>Dough</li></ul>,
      steps: "Roll, cut, bake, frost."
    },

    {
      id: 8,
      title: "Chocolate Doughnuts",
      desc: "Soft chocolate donuts",
      img: "src/assets/pics/ChocolateDoughnuts.jpg",
      time: "40 mins",
      servings: "10 donuts",
      level: "Medium",
      ingredients: <ul><li>Cocoa</li><li>Flour</li></ul>,
      steps: "Bake or fry."
    },

    {
      id: 9,
      title: "Chicken Skewers",
      desc: "Grilled marinated chicken skewers",
      img: "src/assets/pics/Brochettes .jpg",
      time: "30 mins",
      servings: "4 servings",
      level: "Easy",
      ingredients: <ul><li>Chicken</li><li>Spices</li></ul>,
      steps: "Grill skewers."
    },

    {
      id: 10,
      title: "Chourba Frik",
      desc: "Traditional Algerian soup 🇩🇿",
      img: "src/assets/pics/chourbafrik.jpg",
      time: "60 mins",
      servings: "6 servings",
      level: "Medium",
      ingredients: <ul><li>Frik</li><li>Meat</li></ul>,
      steps: "Simmer slowly."
    },

    {
      id: 11,
      title: "Spiral Ratatouille",
      desc: "Beautiful French vegetable dish",
      img: "src/assets/pics/SpiralRatatouille.jpg",
      time: "50 mins",
      servings: "4 servings",
      level: "Medium",
      ingredients: <ul><li>Zucchini</li><li>Eggplant</li></ul>,
      steps: "Bake vegetables."
    },

    {
      id: 12,
      title: "Mushroom Soup",
      desc: "Creamy mushroom soup",
      img: "src/assets/pics/soupedeChampignons.jpg",
      time: "35 mins",
      servings: "4 bowls",
      level: "Easy",
      ingredients: <ul><li>Mushrooms</li><li>Cream</li></ul>,
      steps: "Cook and blend."
    },
  ];

  const [openId, setOpenId] = useState(null);

  return (
    <section className="recipes">
      <h2 className="recipes-title">Our Recipes</h2>

      <div className="recipes-grid">
        {recipes.map((r) => (
          <div key={r.id} className="recipe-card">

            <div className="recipe-image">
              <span className="recipe-badge">{r.level}</span>

              <div className="recipe-icons">
                <button className="icon-btn">♡</button>
                <button className="icon-btn">🔖</button>
              </div>

              <img src={r.img} alt={r.title} />
            </div>

            <div className="recipe-content">
              <h3>{r.title}</h3>
              <p className="recipe-desc">{r.desc}</p>

              <div className="recipe-meta">
                <span>⏱ {r.time}</span>
                <span>👥 {r.servings}</span>
              </div>

              <button
                className="view-btn"
                onClick={() => setOpenId(openId === r.id ? null : r.id)}
              >
                View Recipe
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
