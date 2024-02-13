import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HTX from "/src/assets/images/htx.svg";
import MEXC from "/src/assets/images/mexc.svg";
import BINGX from "/src/assets/images/bingx.svg";
import COINW from "/src/assets/images/coinw.svg";
import BIGMART from "/src/assets/images/bigmart.svg";
import COINEX from "/src/assets/images/coinex.svg";
import BITGET from "/src/assets/images/bitgrt.svg";
import XT from "/src/assets/images/xt.png";
import BICONOMY from "/src/assets/images/biconomy.png";
import ASCENDEX from "/src/assets/images/ascendex.svg";
import POLONIEX from "/src/assets/images/poloniex.svg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};

const Slider = () => {
  return (
    <div className="mb-[150px]">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .3"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[
          "superLargeDesktop",
          "desktop",
          "tablet",
          "mobile"
        ]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="border-2 border-white rounded-2xl py-[14px] px-[20px] mx-[15px]">
          <a target="_blank" href="https://www.htx.com/en-us/trade/myro_usdt" className="flex justify-center items-center">
            <img src={HTX} className="h-[25px] lg:h-[50px]"/>
          </a>
        </div>
        <div className="border-2 border-white rounded-2xl py-[14px] px-[20px] mx-[15px]">
          <a target="_blank" href="https://www.mexc.com/exchange/MYRO_USDT" className="flex justify-center items-center">
            <img src={MEXC} className="h-[25px] lg:h-[50px]"/>
          </a>
        </div>
        <div className="border-2 border-white rounded-2xl py-[14px] px-[20px] mx-[15px]">
          <a target="_blank" href="https://bingx.com/en-us/spot/MYROUSDT/" className="flex justify-center items-center">
            <img src={BINGX} className="h-[25px] lg:h-[50px]"/>
          </a>
        </div>
        <div className="border-2 border-white rounded-2xl py-[14px] px-[20px] mx-[15px]">
          <a target="_blank" href="https://www.coinw.com/frontSpot/spottrade?symbol=1561" className="flex justify-center items-center">
            <img src={COINW} className="h-[25px] lg:h-[50px]"/>
          </a>
        </div>
        <div className="border-2 border-white rounded-2xl py-[14px] px-[20px] mx-[15px]">
          <a target="_blank" href="https://www.bitmart.com/trade/en-US?symbol=MYRO_USDT" className="flex justify-center items-center">
            <img src={BIGMART} className="h-[25px] lg:h-[50px]"/>
          </a>
        </div>
        <div className="border-2 border-white rounded-2xl py-[14px] px-[20px] mx-[15px]">
          <a target="_blank" href="https://www.coinex.com/en/exchange/myro-usdt" className="flex justify-center items-center">
            <img src={COINEX} className="h-[25px] lg:h-[50px]"/>
          </a>
        </div>
        <div className="border-2 border-white rounded-2xl py-[14px] px-[20px] mx-[15px]">
          <a target="_blank" href="https://www.bitget.com/spot/MYROUSDT" className="flex justify-center items-center">
            <img src={BITGET} className="h-[25px] lg:h-[50px]"/>
          </a>
        </div>
        <div className="border-2 border-white rounded-2xl py-[14px] px-[20px] mx-[15px]">
          <a target="_blank" href="https://www.xt.com/en/trade/myro_usdt" className="flex justify-center items-center">
            <img src={XT} className="h-[25px] lg:h-[50px]"/>
          </a>
        </div>
        <div className="border-2 border-white rounded-2xl py-[14px] px-[20px] mx-[15px]">
          <a target="_blank" href="https://ascendex.com/en/cashtrade-spottrading/usdt/myro" className="flex justify-center items-center">
            <img src={ASCENDEX} className="h-[25px] lg:h-[50px]"/>
          </a>
        </div>
        <div className="border-2 border-white rounded-2xl py-[14px] px-[20px] mx-[15px]">
          <a target="_blank" href="https://www.biconomy.com/exchange/MYRO_USDT" className="flex justify-center items-center">
            <img src={BICONOMY} className="h-[25px] lg:h-[50px]"/>
          </a>
        </div>
        <div className="border-2 border-white rounded-2xl py-[14px] px-[20px] mx-[15px]">
          <a target="_blank" href="https://poloniex.com/trade/MYRO_USDT" className="flex justify-center items-center">
            <img src={POLONIEX} className="h-[25px] lg:h-[50px]"/>
          </a>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;

