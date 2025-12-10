import React from "react";
import Container from "./Container";
import Header from "./Header";
import Jumbotron from "./Jumbotron";
import CardsRow from "./CardsRow";
import Footer from "./Footer";

const Home = () => {
  return (
    <Container className="flex-column min-vh-100 p-0">
      {/* Navbar */}
      <Header />

      {/* Contenido principal */}
      <div className="container my-4">
        <Jumbotron />
        <CardsRow />
      </div>

      {/* Footer */}
      <Footer />
    </Container>
  );
};

export default Home;
