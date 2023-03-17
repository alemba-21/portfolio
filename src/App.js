import React from "react";
import Hero from './components/Hero'
import Projects from "./components/Projects"
import Cards from "./components/Cards";
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/Projects" element={<Projects/>} />
      <Route path="/cards" element={<Cards/>}/>
    </Routes>
  );
}

export default App;