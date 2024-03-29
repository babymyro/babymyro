import React from "react";
import "/src/index.css";
import X from "/src/assets/images/social_x.png";
import TG from "/src/assets/images/social_tg.png";
import DOG from "/src/assets/images/footer_dog.png";
import MyroPic from "/src/assets/images/micro_hero_desc_img.png";

const Footer = () => {
  return (
    <div className="footer border-t-2 rounded-t-[88px] bg-gradient-to-b from-[#ffffff1a] to-[#ffffff00] flex items-center lg:px-[70px] lg:items-start pb-[600px] lg:pb-0 lg:item-start flex-col z-2 pt-[118px] relative font-custom">
      <img
        src={DOG}
        className="w-[500px] absolute bottom-[-8px] right-auto lg:right-[60px] pointer-events-none"
      />
      <div className="mb-[31px] max-w-[771px] flex flex-col text-center lg:text-left lg:flex-row justify-center items-center lg:justify-start gap-[64px] text-[16px] font-[300]">
        <img src={MyroPic} className="w-[217px]" />
        <div>
          BABYMYRO is more than just a cryptocurrency, it is also a way to connect
          with other dog meme lovers and make a difference in the world. Join
          the BABYMYRO movement today and help us make the world a more fun and
          inclusive place for everyone!
        </div>
      </div>
      <br />
      <div className="flex gap-[32px] mb-[30px] z-10">
        <a href="https://twitter.com/babymyro_xyz" target="_blank">
          <img src={X} className="w-[40px]" />
        </a>
        <a href="https://t.me/baby_myro" target="_blank">
          <img src={TG} className="w-[40px] z-10" />
        </a>
      </div>
      <div className="w-full py-[32px] flex justify-start items-center text-[20px] font-400 border-t border-[#3d4148]">
      © 2024 BABYMYRO • All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
