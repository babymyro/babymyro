import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "/src/assets/images/intro_picture.png";
import Bone from "/src/assets/images/bone.svg";
import DescImg from "/src/assets/images/micro_hero_desc_img.png";
import GoTo from "/src/assets/images/go_to.svg";

const Intro = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col realtive mt-[205px] mb-[100px] lg:mb-[200px] xl:mb-[419px]">
      {/* ------- Hero Section Image at Left ------ */}
      <img
        src={Image}
        className="max-w-[813px] w-[100%] absolute right-[10px] lg:right-[50px] pointer-events-none top-[50px] z-[-1]"
      />

      {/* ------- Intro Description at Right side ------ */}
      <div
        className="flex flex-col items-center lg:items-start justify-center font-custom "
        data-aos="zoom-in"
      >
        <div className="flex justify-start items-center gap-[30px]">
          <div className="text-[40px] lg:text-[72px] font-[700]">
            Welcome to
          </div>
          <div>
            <img src={Bone} />
          </div>
        </div>
        <div>
          <img src={DescImg} className="max-w-[320px] lg:max-w-[524px]" />
        </div>
        <div className="text-base lg:text-[20px] font-custom font-[400]">
          Myro the dog: Named after Solana Co-Founder Raj
        </div>
        <div className="text-base lg:text-[20px] font-custom font-[400]">
          Gokal’s dog Myro.
        </div>
      </div>

      {/* ------------ Buttons --------- */}
      <div
        className="font-custom font-[500] text-base lg:text-[20px] flex flex-col lg:flex-row gap-[12px] lg:gap-[20px] mt-[30px] px-[20px] lg:px-0"
        data-aos="zoom-in"
      >
        <a
          href="https://jup.ag/swap/SOL-HhJpBhRRn4g56VsyLuT8DL5Bv31HkXqsrahTTUCZeZg4"
          target="_blank"
          className="bg-white py-[10px] px-[16px] lg:py-[12px] lg:px-[20px] text-black rounded-3xl"
        >
          <span className="flex gap-[10px] items-center justify-center">
            Buy on Jupiter <img src={GoTo} />
          </span>
        </a>
        <a
          href="https://t.me/baby_myro"
          target="_blank"
          className="bg-black py-[10px] px-[16px] lg:py-[12px] lg:px-[20px] text-white rounded-3xl flex gap-[10px] border-white border-2"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Intro;
