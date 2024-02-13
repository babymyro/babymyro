import React, { useState, useEffect } from "react";
import Coins from "/src/assets/images/coins.svg";
import Copy from "/src/assets/images/copy.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tokenomics = () => {
const token = '3fsa453asetr23w...'
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className="w-full flex flex-col justify-start items-start font-custom gap-[26px] mb-[150px] lg:mb-[300px]" data-aos="zoom-in" >
      <div className="flex justify-start items-center gap-[35px]">
        <div className="text-[36px] lg:text-[72px] font-[700]">Tokenomics</div>
        <div>
          <img src={Coins} />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row px-[15px] lg:px-0 justify-between gap-[32px] items-center">
        <div className="flex flex-1 justify-between p-[32px] items-center w-full lg:w-auto border-4 border-white rounded-3xl">
          <div className="font-[700] text-[26px]">Symbol</div>
          <div className="font-[300] text-[20px]">$MYRO</div>
        </div>
        <div className="flex flex-1 justify-between p-[32px] items-center w-full lg:w-auto border-4 border-white rounded-3xl">
          <div className="font-[700] text-[26px]">Tax</div>
          <div className="font-[300] text-[20px]">0/0</div>
        </div>
        <div className="flex flex-1 justify-between p-[32px] items-center w-full lg:w-auto border-4 border-white rounded-3xl">
          <div className="font-[700] text-[26px]">Liquidity</div>
          <div className="font-[300] text-[20px]">
            Burned <br /> Forever
          </div>
        </div>
      </div>
      <div className="w-full flex flex-1 justify-between items-center border-4 border-white rounded-3xl p-[32px] ">
        <div className="font-[700] text-[26px]">Token Address</div>
        <div className="flex justify-end items-center gap-[10px]">
          <div className="font-[300] text-[20px]">{token}</div>
          <div onClick={handleCopy} className="cursor-pointer">
            <img src={Copy} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
