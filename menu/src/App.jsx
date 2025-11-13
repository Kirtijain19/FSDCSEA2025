
import React from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";
import pizzaImg from "./images/pizza.jpeg";
import burgerImg from "./images/download.jpeg";
import cokeImg from "./images/download (1).jpeg";

function App() {

  const menuItems = [
    { id: 1, name: "Pizza", price: 120, image: pizzaImg },
    { id: 2, name: "Burger", price: 80, image: burgerImg },
    { id: 3, name: "Coke", price: 40, image: cokeImg },
  ];

  return (
    <div className="App">
      <Nav />
      <header className="header">
        <h2>Welcome to Our Hotel</h2>
        <h3>Our Menu</h3>
      </header>

      <div className="menu">
        {menuItems.map((item) => (
          <Card key={item.id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;

