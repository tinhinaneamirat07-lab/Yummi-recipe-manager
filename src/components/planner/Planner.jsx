import React, { useState } from "react";
import "./Planner.css";

export default function Planner() {
  const [recipes, setRecipes] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
    prepTime: "",
    cookTime: "",
    servings: "",
    ingredients: "",
    instructions: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      ...form,
      ingredients: form.ingredients.split(",").map((i) => i.trim()),
    };

    setRecipes([...recipes, newRecipe]);

    setForm({
      title: "",
      description: "",
      category: "",
      image: "",
      prepTime: "",
      cookTime: "",
      servings: "",
      ingredients: "",
      instructions: "",
    });
  };

  return (
    <div className="planner">
      <div className="planner-container">

        <header className="planner-header">
          <h1>Meal Planner</h1>
          <p>Create and organize your own recipes 🍽️</p>
        </header>

        <form className="planner-form" onSubmit={handleSubmit}>
          <input name="title" placeholder="Recipe title" value={form.title} onChange={handleChange} required />
          <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} required />

          <select name="category" value={form.category} onChange={handleChange} required>
            <option value="">Category</option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Dessert</option>
          </select>

          <textarea name="description" placeholder="Short description" value={form.description} onChange={handleChange} />

          <div className="time-row">
            <input name="prepTime" placeholder="Prep time" value={form.prepTime} onChange={handleChange} />
            <input name="cookTime" placeholder="Cook time" value={form.cookTime} onChange={handleChange} />
            <input name="servings" placeholder="Servings" value={form.servings} onChange={handleChange} />
          </div>

          <textarea name="ingredients" placeholder="Ingredients (comma separated)" value={form.ingredients} onChange={handleChange} />
          <textarea name="instructions" placeholder="Instructions" value={form.instructions} onChange={handleChange} />

          <button>Add Recipe</button>
        </form>

        <section className="planner-grid">
          {recipes.map((r, i) => (
            <div className="planner-card" key={i}>
              <div className="planner-image" style={{ backgroundImage: `url(${r.image})` }}>
                <span>{r.category}</span>
              </div>

              <div className="planner-content">
                <h3>{r.title}</h3>
                <p>{r.description}</p>

                <div className="meta">
                  <span>⏱ {r.prepTime}</span>
                  <span>🔥 {r.cookTime}</span>
                  <span>👥 {r.servings}</span>
                </div>

                <strong>Ingredients</strong>
                <ul>
                  {r.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
                </ul>

                <strong>Instructions</strong>
                <p>{r.instructions}</p>
              </div>
            </div>
          ))}
        </section>

      </div>
    </div>
  );
}
