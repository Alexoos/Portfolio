import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import Cv from "./pages/Cv";

import Projects from "./pages/Projects";

import Contact from "./pages/Contact";

import AggloMistral from "./pages/AggloMistral";

import SDC from "./pages/SDC";

import Portfolio from "./pages/Portfolio";

import Parc from './pages/Parc';

import GSB from "./pages/GSB";

import MDL from "./pages/MDL";

import Nolark from "./pages/Nolark";

import LogServeur from "./pages/LogServeur";

import NotFound from "./pages/NotFound";




const App = () => {
  return (
     
    <BrowserRouter>

      <Routes>

        <Route exact path="/" element={<Home />}></Route>

        <Route exact path="/Accueil" element={<Home />}></Route>

        <Route path="/CV" element={<Cv />}></Route>

        <Route path="/Realisations" element={<Projects />}></Route>

        <Route path="/Contact" element={<Contact />}></Route>

        <Route path="/Agglomistral" element={<AggloMistral />}></Route>

        <Route path="/Sdc" element={<SDC />}></Route>

        <Route path="/Portfolio" element={<Portfolio />}></Route>

        <Route path="/Parc" element={<Parc />}></Route>

        <Route path="/Gsb" element={<GSB />}></Route>

        <Route path="/Mdl" element={<MDL />}></Route>

        <Route path="/Nolark" element={<Nolark />}></Route>

        <Route path="/LogServeur" element={<LogServeur />}></Route>

        <Route path="*" element={<NotFound />}></Route>

      </Routes>

    </BrowserRouter>

  );

};



export default App;

