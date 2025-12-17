import { BrowserRouter, Routes, Route } from "react-router-dom"


// components
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Features from "./components/features/Features"
import Recipes from "./components/recipes/Recipes"
import Footer from "./components/footer/Footer"

// pages
import Login from "./pages/Login"
import Planner from "./components/planner/Planner"

// images
import features1 from "./assets/pics/Features1.jpg"
import features2 from "./assets/pics/Features2.jpeg"
import france from "./assets/pics/france.jpg"

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

              <Features
                images={{
                  features1,
                  features2,
                  france,
                }}
              />

              <Recipes />

              <Footer />
            </>
          }
        />

        {/* PLANNER PAGE */}
        <Route path="/planner" element={<Planner />} />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
