 import React from "react"
 import "./Login.css"

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Sign In</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Login</button>
      </div>
    </div>
  )
}
