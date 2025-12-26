import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";


export default function Profile() {
  return (
    <div className="profile">
      <div className="profile-container">

        {/* HEADER */}
        <div className="profile-header">
          <div className="avatar-placeholder">👤</div>
          <h2>Guest User</h2>
          <p>Not signed in</p>
        </div>

        {/* STATS */}
        <div className="profile-stats">
          <div>
            <strong>0</strong>
            <span>Saved Recipes</span>
          </div>
          <div>
            <strong>0</strong>
            <span>Planned Meals</span>
          </div>
        </div>

        {/* SAVED RECIPES */}
        <section className="profile-section">
          <h3>Saved Recipes</h3>
          <p className="empty-profile">
            You don’t have any saved recipes yet.
          </p>
        </section>

        {/* ACTIONS */}
        <div className="profile-actions">
         <Link to="/login" className="logout-btn">
              Sign in to unlock profile
         </Link>

        </div>

      </div>
    </div>
  );
}
