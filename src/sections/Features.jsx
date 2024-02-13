import React, { useEffect } from "react";
import "/src/index.css";
import Image from "/src/assets/images/features.svg";
import Robo from "/src/assets/images/robo.svg";
import Stake from "/src/assets/images/stake.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import GoTo from "/src/assets/images/go_to.svg";
import GoToWhite from "/src/assets/images/goto_white.svg";
import Gear from "/src/assets/images/gear.svg";

const Features = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex justify-start items-center relative mb-[150px] lg:mb-[300px]">
      <div className="blueEffect"></div>
      <div className="purpleEffect"></div>
      <div className="flex flex-col font-custom text-[36px] lg:text-[72px] font-[700] gap-[32px]">
        <div className="flex justify-center lg:justify-start items-center gap-[32px] mb-[32px]">
          <div>Features</div>
          <div>
            <img src={Image} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mx-[10px] lg:m-0 gap-[35px]">
          <div
            className="flex flex-col flex-1 border-4 border-white bg-[#faf4f40d] gap-[16px] p-[20px] lg:p-[30px] rounded-3xl justify-around items-start"
            data-aos="zoom-in"
          >
            <div>
              <div>
                <img src={Robo} className="w-[64px]" />
              </div>
              <div className="text-[36px] font-[700]">BABYMYRO SOL Bot</div>
              <div className="text-[20px] font-[400] mb-[30px]">
                Solana's first public BuyBot on Telegram. Promoting
                cross-pollination and offering free exposure through "BABYMYRO Trending". As adoption grows, a small fee for trending will be introduced, with a chance for free inclusion. Generated revenue
                feeds into the Treat Jar (Treasury) for transparency,
                contributing to $BABYMYRO's growth.
              </div>
            </div>
            <a
              href="https://t.me/babymyrobot"
              target="_blank"
              className="bg-white py-[12px] px-[20px] text-black rounded-3xl text-[20px] font-[500] max-w-fit"
            >
              <span className="flex gap-[10px] items-center justify-center">
                Solona Bot <img src={GoTo} />
              </span>
            </a>
          </div>

          <div
            className="flex flex-col flex-1 border-4 border-white bg-[#faf4f40d] gap-[16px] p-[20px] lg:p-[30px] rounded-3xl justify-around items-start"
            data-aos="zoom-in"
          >
            <div>
              <div>
                <img src={Stake} className="w-[64px]" />
              </div>
              <div className="text-[36px] font-[700]">BABYMYRO Staking</div>
              <div className="text-[20px] font-[400] mb-[30px]">
                Unlock the full potential of your $BABYMYRO investment with our
                Staking Pool Utility. Seamlessly stake your coins, earn
                sustainable rewards, and contribute to Solana's
                decentralization. User-friendly and secure, it's the hassle-free
                way to maximize your crypto returns.
              </div>
            </div>
            <a
              href="/"
              target="_blank"
              className="border-2 border-white py-[12px] px-[20px] text-white rounded-3xl text-[20px] font-[500] max-w-fit"
            >
              <span className="flex gap-[10px] items-center justify-center">
                Coming Soon... <img src={GoToWhite} />
              </span>
            </a>
          </div>

          <div
            className="flex flex-col flex-1 border-4 border-white bg-[#faf4f40d] gap-[16px] p-[20px] lg:p-[30px] rounded-3xl justify-around items-start"
            data-aos="zoom-in"
          >
            <div>
              <div>
                <img src={Gear} className="w-[64px]" />
              </div>
              <div className="text-[36px] font-[700]">Further Utilities</div>
              <div className="text-[20px] font-[400] mb-[30px]">
                $BABYMYRO is set to transform the Solana ecosystem, delivering
                essential utilities for the evolving needs of users. Our
                commitment ensures a dynamic contribution to Solana's long-term
                growth, serving hundreds of thousands of users.
              </div>
            </div>
            <a
              href="/"
              target="_blank"
              className="border-2 border-white py-[12px] px-[20px] text-white rounded-3xl text-[20px] font-[500] max-w-fit"
            >
              <span className="flex gap-[10px] items-center justify-center">
                Coming Soon... <img src={GoToWhite} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
