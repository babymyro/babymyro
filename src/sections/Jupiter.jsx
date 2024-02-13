import React, { useEffect } from "react";
import Image from "/src/assets/images/jupiter_img.png";
import AOS from "aos";
import "aos/dist/aos.css";
import JupiterWallet from "../components/JupiterWallet";

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
      <div className="min-w-[400px]">
        {/* <img src={Image} /> */}
        {/* <JupiterWallet /> */}
     

        <iframe
        width="400"
        height="600"
        className="rounded-2xl"
        src="https://jup.ag/swap/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v-HhJpBhRRn4g56VsyLuT8DL5Bv31HkXqsrahTTUCZeZg4?inAmount"
      ></iframe>


      </div>
    </div>
  );
};

export default Jupiter;
