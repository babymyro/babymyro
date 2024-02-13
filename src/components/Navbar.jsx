import React, { useState } from "react";
import NavLogo from "/src/assets/images/nav_logo.png";
import { Link } from "react-scroll";
import MenuIcon from "/src/assets/images/hamburger.svg";
import CloseIcon from "/src/assets/images/close.svg";
import X from "/src/assets/images/social_x.png";
import TG from "/src/assets/images/social_tg.png";
import '/src/index.css'


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className=" hidden lg:flex justify-around items-center ">
        <a href="/">
          <img src={NavLogo} className="w-[200px]" />
        </a>
        <div className="flex justify-end flex-1 items-center gap-[64px]">
          <div className="font-custom font-[400] text-[20px]">Home</div>
          <div className="font-custom font-[400] text-[20px]">About</div>
          <div className="font-custom font-[400] text-[20px]">Tokenomics</div>
          <div className="font-custom font-[400] text-[20px]">Whitepaper</div>
          <div className="font-custom font-[400] text-[20px]">Socials</div>
          <div className="font-custom font-[400] text-[20px] border-2 border-white rounded-2xl py-[10px] px-[20px]">
            Join the community
          </div>
        </div>
      </div>
      <div className="flex lg:hidden justify-between items-center relative px-[20px] z-10">
        <a href="/" className="z-2">
          <img src={NavLogo} className="w-[130px]" />
        </a>

        {!menu && (
          <div onClick={toggleMenu}  className="z-2">
            <img src={MenuIcon} className="w-[35px]" />
          </div>
        )}
        {menu && (
          <div onClick={toggleMenu}  className="z-2">
            <img src={CloseIcon} className="w-[35px]" />
          </div>
        )}

        {menu && (
          <div className="absolute  w-full left-0 rounded-b-3xl border-b-4 border-white top-[115px] px-[18px] bg-gradient-to-b from-[#ffffff59] to-[#ffffff96] mobNav">
            <div className="flex flex-col justify-center flex-1 items-start gap-[20px]">
              <div className="font-custom font-[400] text-[36px]">Home</div>
              <div className="font-custom font-[400] text-[36px]">About</div>
              <div className="font-custom font-[400] text-[36px]">
                Tokenomics
              </div>
              <div className="font-custom font-[400] text-[36px]">
                Whitepaper
              </div>
              <div className="font-custom font-[400] text-[36px]">Socials</div>
              <div className="font-custom font-[400] text-[20px] border-2 self-center border-white rounded-2xl py-[10px] px-[20px]">
                Join the community
              </div>
            </div>
            <br />
            <div className="flex justify-center items-center  gap-[32px] mb-[30px]">
              <a href="https://twitter.com/babymyro_xyz" target="_blank">
                <img src={X} className="w-[40px]" />
              </a>
              <a href="https://t.me/baby_myro" target="_blank">
                <img src={TG} className="w-[40px]" />
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
