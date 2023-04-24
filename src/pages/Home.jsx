// components
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Tarif from '../components/Tarif';
import Done from './Done';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Done/>
      <Tarif/>
    </>
  );
}

export default Home;
