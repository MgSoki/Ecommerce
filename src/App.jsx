import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, NotFoundPage, ProductDetail } from "./components/pages";
import { Nav } from "./components/ui";
import Footer from "./components/ui/Footer.ui";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
