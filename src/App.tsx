import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import LocationInfo from "./components/Location";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <About />
      <Services />
      <LocationInfo />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
