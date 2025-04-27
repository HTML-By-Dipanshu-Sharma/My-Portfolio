import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";
import Header from './componant/Header';
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default App;


