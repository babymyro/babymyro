import React, { useEffect, useState } from "react";
// import Image from "/src/assets/images/myro_img.png";
import AOS from "aos";
import "aos/dist/aos.css";
import MayanWallet from "../components/MayanWallet";


const Mayan = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // const [mayanDrop, setMayanDrop] = useState(false);

  // const openmayanDrop = () => {
  //   setMayanDrop(!mayanDrop);
  // };
  // const closemayanDrop = () => {
  //   setMayanDrop(!mayanDrop);
  // };

  return (
    <div className="block m-auto lg:m-0 lg:flex justify-around items-start px-[20px] mb-[100px] lg:mb-[200px]">
      <div
        className="flex flex-col justify-start items-start font-custom lg:w-[41vw] lg:mt-o"
        data-aos="zoom-in"
      >
        <div className="text-[36px] lg:text-[72px] font-[700]">
          Or buy using <br /> Mayan:
        </div>
        <br />
        <br />
        <div className="text-base lg:text-[20px] font-[400]">
          Want to buy cross-chain? Swap seamlessly from ETH, BSC, ARB, AVAX or
          Solana chain to buy $BABYMYRO. Low fees, cross chain.
        </div>
      </div>
      <div className="min-w-[360px]">
        {/* <img src={Image} /> */}
        <MayanWallet />
      </div>
    </div>
  );
};

export default Mayan;
