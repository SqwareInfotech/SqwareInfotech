import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Workfolio from "./components/Workfolio";


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Services />
        <Workfolio />
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
