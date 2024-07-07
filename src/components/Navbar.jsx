import { useEffect, useRef } from 'react';

import logo from '../assets/logo.png';
import searchIcon from '../assets/searchIcon.svg';
import bellIcon from '../assets/bellIcon.svg';
import caretIcon from '../assets/caretIcon.svg';
import profileImg from '../assets/profileImg.png';

import { logout } from '../utilities/firebase';

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('bg-[#141414]');
      } else {
        navRef.current.classList.remove('bg-[#141414]');
      }
    });
  }, []);

  return (
    <div
      ref={navRef}
      className="bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-transparent text-[#e5e5e5] text-sm w-full flex   justify-between fixed z-[1] py-5 md:px-[6%] px-[4%]"
    >
      <div className="flex items-center gap-12">
        <img src={logo} alt="" className="h-5 sm:h-6 md:w-[90px]" />
        <ul className="hidden md:flex gap-5 nav-links">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="flex gap-2 sm:gap-5 items-center">
        <img src={searchIcon} alt="" className="w-5 cursor-pointer" />
        <p>Children</p>
        <img src={bellIcon} alt="" className="w-5 cursor-pointer" />
        <div className="flex items-center gap-2 cursor-pointer relative group">
          <img src={profileImg} alt="" className="w-9 rounded" />
          <img src={caretIcon} alt="" className="" />
          <div className="absolute top-full right-0 w-max bg-[#191919] py-4 px-5 underline z-[1] hidden group-hover:block">
            <p
              className="text-[13px]"
              onClick={() => {
                logout();
              }}
            >
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
