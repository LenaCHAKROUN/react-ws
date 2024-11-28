import React from "react"
import './App.css';

import MyNav from "./components/MyNav";
import Slide from "./components/Slide";
import Content from "./components/Content";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      {/*bar de navigation*/}
      <MyNav />
      {/*caroussel*/}
      <Slide/>
      {/*introduction*/}
      <div className="intro">
        <h1>POSITANO</h1>
        <p>Positano est une commune de la province de Salerne dans la Campanie en Italie. C'est une station balnéaire connue de la côte amalfitaine.

Selon une légende, c'est Neptune, le dieu de la mer, qui aurait fondé Positano, par amour pour une nymphe [réf. souhaitée].

La ville a lancé la mode des sandales ouvertes dans les années 1950 qui ont été vendues dans le monde entier et sont encore connues sous l’appellation sandales de Positano.</p>
      </div>
      {/*Rooms*/}
      <h1>Rooms</h1>
      <Content />
    {/*Contact*/}
    <h1>Contact Us</h1>
    <Contact />
    <footer>
      <p><strong>Copy right © 2024</strong></p>
    </footer>
    </div>
  );
}

export default App;
