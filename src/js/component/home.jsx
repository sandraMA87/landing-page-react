import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
