import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import Cv from "./pages/Cv";

import Projects from "./pages/Projects";

import Contact from "./pages/Contact";

import NotFound from "./pages/NotFound";





const App = () => {
  return (
     
    <BrowserRouter>

      <Routes>

        <Route exact path="/Accueil" element={<Home />}></Route>

        <Route path="/CV" element={<Cv />}></Route>

        <Route path="/Realisations" element={<Projects />}></Route>

        <Route path="/Contact" element={<Contact />}></Route>

        <Route path="*" element={<NotFound />}></Route>

      </Routes>

    </BrowserRouter>

  );

};



export default App;

