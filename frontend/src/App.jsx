import './css/App.css'
import Favorites from "./pages/Favorites";
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import { MovieProvider } from "./contexts/MovieContext"

//component is a javascript function that returns jsx code. for it to be jsx code, it has to have a parent element to return. 
function App() {
  



  return (
    // <>Called a fragment, it's an empty html tag to store different elements toghether for the function
    //inside braces for object, outside braces for variable
    <div>
      <MovieProvider>
        <NavBar />
        <main className ="main-content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/favorites" element={<Favorites />}/>
          </Routes>
        </main>
      </MovieProvider>
    </div>
  );
}

//parameter is named property/prop
function Text({display}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App;
