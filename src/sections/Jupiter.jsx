import React, { useEffect } from "react";
import Image from "/src/assets/images/jupiter_img.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Jupiter = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="block m-auto lg:m-0 lg:flex justify-around items-start px-[20px] mb-[100px] lg:mb-[200px]">
      <div
        className="flex flex-col justify-start items-start font-custom lg:w-[41vw] lg:mt-o"
        data-aos="zoom-in"
      >
        <div className="text-[36px] lg:text-[72px] font-[700]">
          Buy using <br /> Jupiter:
        </div>
        <br />
        <br />
        <div className="text-base lg:text-[20px] font-[400]">
        Already have $SOL in your wallet? Swap using Jupiter below. 
        </div>
      </div>
        <div>
          <img src={Image} />
        </div>
    </div>
  );
};

export default Jupiter;
