import React, { useState } from "react";
import "./Planner.css";

export default function Planner() {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      name,
      time,
      ingredients: ingredients.split(",").map((i) => i.trim()),
    };
    setRecipes([...recipes, newRecipe]);
    setName("");
    setTime("");
    setIngredients("");
  };

  return (
    <div className="planner"> 
    <section className="planner-todolist">
      <h1 className="title">Add Recipe</h1>
      <p className="subtitle">Add your recipes, cooking time, and ingredients</p>

      <div className="todolist-container">
        <form className="recipe-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Recipe Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Cooking Time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <textarea
            placeholder="Ingredients (comma separated)"
            required
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          <button type="submit">Add Recipe</button>
        </form>

        <div className="recipe-list">
          {recipes.length === 0 ? (
            <p className="empty-text">Your recipes will appear here...</p>
          ) : (
            recipes.map((recipe, index) => (
              <div key={index} className="recipe-item">
                <h3>{recipe.name}</h3>
                <p><strong>Time:</strong> {recipe.time}</p>
                <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
    </div>
  );
}
