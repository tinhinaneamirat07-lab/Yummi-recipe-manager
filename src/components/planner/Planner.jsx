import React, { useState } from "react";
import "./Planner.css";

export default function Planner() {
  const [recipes, setRecipes] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

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
      id: Date.now(),
    };

    setRecipes([newRecipe, ...recipes]);

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

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((r) => r.id !== id));
  };

  return (
    <div className="planner">
      <div className="planner-container">

        {/* HEADER */}
        <header className="planner-header">
          <h1>My Kitchen</h1>
          <p>Your personal planner for homemade recipes 🍳</p>
        </header>

        {/* FORM */}
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

        {/* GRID */}
        <section className="planner-grid">
          {recipes.length === 0 && (
            <p className="empty">
              No recipes yet. Add your first one above 👆
            </p>
          )}

          {recipes.map((r, i) => (
            <div className="planner-card" key={r.id}>

              <div
                className="planner-image"
                style={{ backgroundImage: `url(${r.image})` }}
              >
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

                <div className="planner-actions">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === i ? null : i)
                    }
                  >
                    {openIndex === i ? "Hide details" : "View details"}
                  </button>

                  <button className="danger" onClick={() => deleteRecipe(r.id)}>
                    Delete
                  </button>
                </div>

                {openIndex === i && (
                  <div className="planner-details">
                    <strong>Ingredients</strong>
                    <ul>
                      {r.ingredients.map((ing, idx) => (
                        <li key={idx}>{ing}</li>
                      ))}
                    </ul>

                    <strong>Instructions</strong>
                    <p>{r.instructions}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>

      </div>
    </div>
  );
}
