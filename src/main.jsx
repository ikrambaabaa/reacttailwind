import React from "react";
import { createRoot } from "react-dom/client"; 
import "./index.css"
import Hero from "./assets/components/hero/hero";
import Services from "./assets/components/services/services";
import Banner from "./assets/components/banner/banner";
import Subscribe from "./assets/components/Subscribe/Subscribe";
import Banner2 from "./assets/components/banner/banner2";
import Footer from "./assets/components/Footer/Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Hero />
    <Services />
    <Banner />
    <Subscribe />
    <Banner2 />
    <Footer />
  </React.StrictMode>
);
