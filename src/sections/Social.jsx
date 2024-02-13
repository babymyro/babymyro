import React, { useEffect } from "react";
import Image from "/src/assets/images/social_picture.svg";
import X from "/src/assets/images/social_x.png";
import TG from "/src/assets/images/social_tg.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Social = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-around lg:justify-around items-center lg:items-start px-[20px] mb-[150px] lg:mb-[240px]">
      <div data-aos="zoom-in">
        <img src={Image} />
      </div>
      <div
        className="flex flex-col justify-start items-start font-custom lg:w-[41vw] lg:mt-o"
        data-aos="zoom-in"
      >
        <div className="text-[40px] lg:text-[72px] font-[700]">
          Follow MYRO on <br /> social media
        </div>
        <br />
        <div className="flex gap-[32px]">
          <a href="https://twitter.com/babymyro_xyz" target="_blank">
            <img src={X} />
          </a>
          <a href="https://t.me/baby_myro" target="_blank">
            <img src={TG} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
