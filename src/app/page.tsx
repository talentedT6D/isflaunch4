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

export default function Home() {
  return (
    <>
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
    </>
  );
}
