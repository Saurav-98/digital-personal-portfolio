import React from "react";

import "./app.scss";

import { Navbar } from "./components";

import { About, Footer, Testimonial, Header, Skills, Work } from "./container";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
