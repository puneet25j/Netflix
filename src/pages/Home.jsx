import Navbar from '../components/Navbar';
import TitleCards from '../components/TitleCards';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';

const Home = () => {  
  return (
    <div className="">
      <Navbar />
      <HeroBanner/>
      <div className="pl-[4%] md:pl-[6%]">
        <TitleCards title={'Blockbuster Movies'} category={'top_rated'} />
        <TitleCards title={'Only on Netflix'} category={'popular'} />
        <TitleCards title={'Upcoming'} category={'upcoming'} />
        <TitleCards title={'Top Pics for You'} category={'now_playing'} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
