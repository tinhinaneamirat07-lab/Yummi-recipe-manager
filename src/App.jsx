

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import Recipes from "./components/recipes/Recipes";
import Planner from "./components/planner/Planner";
import Footer from "./components/footer/Footer";

//import pics
import banana from "./assets/pics/banana.jpg"
import blackoutCake from "./assets/pics/BlackoutCake.jpg"
import brochettes from "./assets/pics/Brochettes .jpg"
import chocolateChipCookies from "./assets/pics/ChocolateChipCookies .jpeg"
import chocolateDoughnuts from "./assets/pics/ChocolateDoughnuts.jpg"
import chourbaFrik from "./assets/pics/chourbafrik.jpg"
import cina from "./assets/pics/cina.jpg"
import features1 from "./assets/pics/Features1.jpg"
import features2 from "./assets/pics/Features2.jpeg"
import france from "./assets/pics/france.jpg"
import soupeChampignons from "./assets/pics/soupedeChampignons.jpg"
import sourdough from "./assets/pics/Sourdough .jpeg"
import spiralRatatouille from "./assets/pics/SpiralRatatouille.jpg"
import tiramisu from "./assets/pics/tiramisu.jpg"




import "./App.css";

function App() {
  return (
    
      

      
            <>
             <Navbar /> 
              <Hero />
               <Features
        images={{
          features1,
          features2,
          france,
        }}
      />


               <Recipes
        images={{
          banana,
          tiramisu,
          blackoutCake,
          chocolateChipCookies,
          chocolateDoughnuts,
          brochettes,
          chourbaFrik,
          cina,
          soupeChampignons,
          sourdough,
          spiralRatatouille,
        }}
      />
              <Planner />
              <Footer />
            </>
          
      
      
    
  );
}

export default App;
