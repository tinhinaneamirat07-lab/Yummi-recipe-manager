import { BrowserRouter, Routes, Route } from "react-router-dom"

// components
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Recipes from "./components/recipes/Recipes"
import Footer from "./components/footer/Footer"

// pages
import Login from "./pages/Login"
import Planner from "./components/planner/Planner"
import Profile from "./pages/Profile"

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Recipes />
              <Footer />
            </>
          }
        />

        {/* PLANNER */}
        <Route path="/planner" element={<Planner />} />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* PROFILE */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
