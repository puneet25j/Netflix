import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const TitleCards = ({ title, category, style }) => {
  const [apiData, setApiData] = useState([])
  const cardsRef = useRef();

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({cat: category?category: "now_playing"})
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/movies/list`, config)
      .then((response) => response.json())
      .then((response) => setApiData(response))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  }, []);

  function handleWheel(event) {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  return (
    <div className={"mt-5 mb-0 md:mt-12 md:mb-8 " + style}>
      <h2 className="mb-2 text-sm sm:text-xl md:text-2xl font-bold">
        {title ? title : 'Popular on Netflix'}
      </h2>
      <div className="flex gap-2 overflow-x-scroll" ref={cardsRef}>
        {apiData.map((card) => {
          return (
            <Link to={`/player/${card.id}`} key={card.id} className="relative">
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                className="w-40 sm:w-48 md:w-60 rounded cursor-pointer max-w-none"
              />
              <p className="text-[10px] sm:text-xs md:text-base absolute left-1 bottom-3 right-3">{card.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
