import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductsList from "./ProductsList";

export default function Products() {
  return <>
    <Navbar />
    <ProductsList />
    <Footer />
  </>;
}
