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
import Carrot from './assets/carrot.png'
import Orange from './assets/orange.png'


function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      <Header2 />

      {/* body */}
      <div className="add-component">
        <Add image={Carrot} name="Veggies"/>
        <Add image={Orange} name="Fruits" />
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
