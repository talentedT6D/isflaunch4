"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EventDetails from "@/components/EventDetails";
import Process from "@/components/Process";
import Judges from "@/components/Judges";
import Criteria from "@/components/Criteria";
import Submit from "@/components/Submit";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* Preloader */}
      {!loaded && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Main site content */}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
        }}
      >
        <ScrollAnimator />
        <Navbar />
        <main>
          <Hero />
          <div className="fade-in">
            <About />
          </div>
          <EventDetails />
          <div className="fade-in">
            <Process />
          </div>
          <div className="fade-in">
            <Judges />
          </div>
          <div className="fade-in">
            <Criteria />
          </div>
          <div className="fade-in">
            <Submit />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
