import React, { useEffect } from "react";
import Image from "/src/assets/images/base_picture.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import GoTo from '/src/assets/images/link.svg'

const How = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-around lg:justify-around items-center lg:items-start px-[20px] mb-[20px]">
      <div >
        <img src={Image} />
      </div>
      <div
        className="flex flex-col justify-start items-start font-custom lg:w-[41vw] lg:mt-o"
        data-aos="zoom-in"
      >
        <div className="text-[72px] font-[700]">
          How to Buy <br /> $MYRO
        </div>
        <br />
        <div className="text-[20px] font-[400]">
          You can purchase $MYRO in various different ways. We reccomend
          downloading Phantom Wallet, purchasing SOL, sending it to your phantom
          address and swapping using Phantom's in-app wallet, or on a
          decentralised exchange like Jupiter. You can purchase $MYRO multichain
          using our integreated Mayan swap, or swap using Jupiter if you already
          own some $SOL.
          <br />
          <br />
          <a
            href="https://phantom.app/"
            target="_blank"
            className="bg-black py-[12px] px-[20px] text-white rounded-3xl flex gap-[10px] border-white border-2 max-w-fit"
          >
            <span className="flex gap-[10px] items-center justify-center">
              Buy on Jupiter <img src={GoTo} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default How;
