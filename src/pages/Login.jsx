import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <p>Please sign in to your account</p>

        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button type="submit">Sign In</button>
        </form>

        <span className="login-footer">
          Don’t have an account? <a href="#">Sign up</a>
        </span>
      </div>
    </div>
  );
}
