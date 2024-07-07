import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import backArrowIcon from '../assets/backArrowIcon.png';

const initialState = {
  name: '',
  key: '',
  published_at: '',
  typeof: '',
  imdb_id: '',
  title: '',
  release_date: '',
  vote_average: '',
};

const Player = () => {
  const [apiData, setApiData] = useState(initialState);
  const { id } = useParams();
  const navigate = useNavigate();

  const youtubeLink = `https://www.youtube.com/embed/${apiData.key}`;
  // const vidSrc = `https://vidsrc.to/embed/movie/${apiData.imdb_id}`;

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: id }),
  };

  useEffect(() => {
    fetch('http://localhost:8000/movies/video', config)
      .then((response) => response.json())
      .then((response) => setApiData(response[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img
        src={backArrowIcon}
        alt=""
        className="absolute top-5 left-5 w-12 cursor-pointer"
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        width="90%"
        height="90%"
        src={youtubeLink}
        title="trailer"
        frameBorder="0"
        allowFullScreen
        className="rounded-[10px]"
      ></iframe>
      <div className="flex items-center justify-between w-[90%]">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
        {/* <p>{apiData.release_date}</p>
        <p>{apiData.title}</p>
        <p>{apiData.vote_average}</p> */}
      </div>
    </div>
  );
};

export default Player;
