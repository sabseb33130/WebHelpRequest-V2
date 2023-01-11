import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Films from "./pages/Films";
import Home from "./pages/Home";
import Test from "./pages/Test";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/*ligne qui renvoi vers l'accueil si les infos sont fausses*/}
          <Route path="*" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Starwars" element={<Test />}></Route>
          <Route path="/Films" element={<Films />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
