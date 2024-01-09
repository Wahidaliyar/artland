import React from "react";
import OrderForm from "./OrderForm";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Order() {
  return (
    <>
      <Navbar />
      <OrderForm />
      <Footer />
    </>
  );
}
