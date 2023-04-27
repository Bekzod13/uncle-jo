// components
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Map from '../components/Map';
import Navbar from '../components/Navbar';
import Packaging from '../components/Packaging';
import Questions from '../components/Questions';
import Tarif from '../components/Tarif';
import Trade from '../components/Trade';
import Done from '../components/Done';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Done/>
      <Tarif/>
      <Packaging/>
      <Trade/>
      <Questions/>
      <Contact/>
      <Map/>
      <Footer/>
    </>
  );
}

export default Home;
