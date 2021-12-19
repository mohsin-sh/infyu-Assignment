import React from "react";
import './App.css'
import Add from "./components/add/Add";
import Card from "./components/card/Card";
import Discount from "./components/Discount/Discount";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Header2 from "./components/header/Header2";
import Info from "./components/info/Info";
import News from "./components/news/News";
import Sproduct from "./components/specialProduct/sproduct";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      <Header2 />

      {/* body */}
      <div className="add-component">
        <Add image="http://groca.vedicthemes.com/image/catalog/groca/blocks/img-1.jpg" name="Veggies"/>
        <Add image="http://groca.vedicthemes.com/image/catalog/groca/blocks/img-2.jpg" name="Fruits" />
      </div>
      <Info />
      <Card />
      <Discount />
      <Sproduct />
      <Testimonials />
      <News />

      {/* footeer */}
      <Footer />
    </div>
  );
}

export default App;
