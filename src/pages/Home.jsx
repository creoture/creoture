import Navbar from "../components/layout/Navbar.jsx";
import Hero from "../components/sections/Hero.jsx";
import WhyChooseUs from "../components/sections/WhyChooseUs.jsx";
import Services from "../components/sections/Services.jsx";
import Portfolio from "../components/sections/Portfolio.jsx";
import Process from "../components/sections/Process.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import ContactTerminal from "../components/sections/ContactTerminal.jsx";
import Footer from "../components/sections/Footer.jsx";

function Home() {
  return (
    <div id="top" className="min-h-screen bg-base">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <ContactTerminal />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
