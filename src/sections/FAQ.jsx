import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Faqs from "/src/assets/images/faq.svg";

const FAQ = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="zoom-in"
      className="flex w-full flex-col justify-center items-censtartter font-custom mb-[270px]"
    >
      <div className="flex justify-start items-center gap-[32px] mb-[50px]">
        <div className="text-[72px] font-[700]">FAQ</div>
        <div>
          <img src={Faqs} />
        </div>
      </div>

      <div className="m-2 space-y-2 md:space-y-3 lg:space-y-4">
        <div
          className="group flex flex-col gap-2 rounded-3xl border-4 border-white bg-gradient-to-b from-[#ffffff1a] to-[#ffffff00] p-[32px] text-white"
          tabIndex="1"
        >
          <div className="flex cursor-pointer items-center justify-between">
            <span className="text-[36px] font-[700]">
              {" "}
              How do I Buy and Sell $MYRO?{" "}
            </span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
              className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
            />
          </div>
          <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 text-[20px] font-[400]">
            You can trade $MYRO on any of our listed Centralised Exchanges, or
            on Decentralised Exchanges like Jupiter and Raydium.
          </div>
        </div>

        <div
          className="group flex flex-col gap-2 rounded-3xl border-4 border-white bg-gradient-to-b from-[#ffffff1a] to-[#ffffff00] p-[32px] text-white"
          tabIndex="2"
        >
          <div className="flex cursor-pointer items-center justify-between">
            <span className="text-[36px] font-[700]">
              Will $MYRO list on more CEX`s?
            </span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
              className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
            />
          </div>
          <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 text-[20px] font-[400]">
            Yes. $MYRO will be listed on most major worldwide exchanges.
          </div>
        </div>

        <div
          className="group flex flex-col gap-2 rounded-3xl border-4 border-white bg-gradient-to-b from-[#ffffff1a] to-[#ffffff00] p-[32px] text-white"
          tabIndex="3"
        >
          <div className="flex cursor-pointer items-center justify-between">
            <span className="text-[36px] font-[700]">
              {" "}
              Is there a $MYRO whitepaper / roadmap?{" "}
            </span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
              className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
            />
          </div>
          <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 text-[20px] font-[400]">
            Yes, you can view our whitepaper
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
