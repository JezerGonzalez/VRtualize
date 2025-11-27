import { useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const unavailableDates: string[] = [
      "2024-10-15",
      "2024-10-20",
      "2024-11-01",
    ];

    const dateInput = document.getElementById("date") as HTMLInputElement | null;

    const today = new Date().toISOString().split("T")[0];

    if (dateInput) {
      dateInput.min = today;

      dateInput.addEventListener("input", function (this: HTMLInputElement) {
        if (unavailableDates.includes(this.value)) {
          alert("Esta fecha no está disponible. Por favor elige otra.");
          this.value = "";
        }
      });
    }
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <BookingForm />
      <Footer />
    </>
  );
}
