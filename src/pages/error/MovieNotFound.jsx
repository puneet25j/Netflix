import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const MovieNotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="h-screen bg-notFound-bg bg-no-repeat bg-cover">
      <div className="w-full bg-[#141414] py-5 px-[8%]">
        <img src={logo} alt="" className="w-[150px]" />
      </div>
      <div className="w-full max-w-[1000px] p-16 m-auto text-center">
        <h1 className="text-6xl font-medium mb-5">Lost Your Way?</h1>
        <p className="text-lg mb-5">
          Sorry, we can not find the movie. You will find lots to explore on the
          home page.
        </p>
        <button
          onClick={() => {
            navigate('/');
          }}
          className="bg-white text-black font-medium py-3 px-5 rounded shadow"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default MovieNotFound;
