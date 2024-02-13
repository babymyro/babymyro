import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DOG from "/src/assets/images/hero_img.png";
import Choose_2 from "/src/assets/images/choose_2.svg";
import Choose_3 from "/src/assets/images/choose_3.svg";
import Choose_4 from "/src/assets/images/choose_4.svg";

const Why = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="zoom-in"
      className="w-full flex flex-col justify-center items-center lg:items-start gap-[50px] font-custom mb-[150px] px-[15px] lg:px-0"
    >
      <div className="text-[40px] lg:text-[72px] font-[700]">Why choose $BABYMYROv ?</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-[20px] font-[400]">
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-[10px]">
          <div>
            <img src={DOG} className="w-[200px]"/>
          </div>
          <div>
            Myro is a viral narrative based on Solana Co-Founder Raj Gokal’s pet
            dog, becoming a staple in the Solana memecoin space.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-[10px] lg:mt-[150px]">
          <div>
            <img src={Choose_2} className="w-[200px]"/>
          </div>
          <div>
            Myro is a viral narrative based on Solana Co-Founder Raj Gokal’s pet
            dog, becoming a staple in the Solana memecoin space.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-[20px] lg:mt-[300px]">
          <div>
            <img src={Choose_3} className="w-[200px]"/>
          </div>
          <div>
            Myro is a viral narrative based on Solana Co-Founder Raj Gokal’s pet
            dog, becoming a staple in the Solana memecoin space.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-[10px] lg:mt-[80px]">
          <div>
            <img src={Choose_4} className="w-[200px]"/>
          </div>
          <div>
            Myro is a viral narrative based on Solana Co-Founder Raj Gokal’s pet
            dog, becoming a staple in the Solana memecoin space.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
