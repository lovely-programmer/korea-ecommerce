"use client";
import Navbar from "@/components/navbar";
import Hero from "@/sections/Hero";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);
  return (
    <div className="container">
      <Navbar setCart={setCart} cart={cart} />
      <Hero />
      <Cards setCart={setCart} cart={cart} />
      <Footer />
    </div>
  );
}
