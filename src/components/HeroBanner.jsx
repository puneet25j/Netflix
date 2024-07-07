import { useEffect, useState } from 'react';

import playIcon from '../assets/playIcon.png';
import infoIcon from '../assets/infoIcon.png';

import TitleCards from './TitleCards';
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {
  const navigate = useNavigate();
  const [hero, setHeroData] = useState({
    id: '',
    overview: '',
    backdrop_path: '',
    title: ''
  });

  useEffect(()=>{
    console.log(import.meta.env.VITE_URL);
    fetch(`${import.meta.env.VITE_URL}/hero`)
      .then((response) => response.json())
      .then((response) => setHeroData(response))
      .catch((err) => console.error(err));
  },[])

  return (
    <div className="relative">
      <img
        src={`https://image.tmdb.org/t/p/original/` + hero.backdrop_path}
        alt=""
        className="w-full hero-banner-mask"
      />
      <div className="absolute w-full bottom-0 pl-[4%] md:pl-[6%]">
        <h1 className=" text-2xl md:text-4xl font-bold w-2/5 md:w-auto mb-4">
          {hero.title}
        </h1>
        <p className="hidden sm:block max-w-[700px] text-xs mb-2.5 md:text-lg md:mb-5">
          {hero.overview}
        </p>
        <div className="flex gap-2 mb-7 lg:mb-12 ">
          <button
            onClick={() => {
              navigate(`./player/${hero.id}`);
            }}
            className="inline-flex items-center text-black text-sm sm:text-base font-semibold gap-1 sm:gap-2 py-1 px-2.5 sm:py-2 sm:px-5 bg-white hover:bg-[#ffffffbf] cursor-pointer rounded border-0"
          >
            <img src={playIcon} alt="" className="w-4 sm:w-5 md:w-6" />
            Play
          </button>
          <button className="inline-flex items-center text-sm sm:text-base font-semibold gap:1 sm:gap-2 py-1 px-2.5 sm:py-2 sm:px-5  bg-[#6d6d6eb3] hover:bg-[#6d6d6e66] cursor-pointer rounded border-0">
            <img src={infoIcon} alt="" className="w-4 sm:w-5 md:w-6" />
            More Info
          </button>
        </div>
        <TitleCards style={'hidden lg:block'} />
      </div>
    </div>
  );
};

export default HeroBanner;
