import React, { useState } from "react";
import Gear from "/src/assets/images/gear.svg";
import "/src/index.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Switch from "@mui/material/Switch";
import SearchIcon from "@mui/icons-material/Search";


const MayanWallet = () => {
  const [settings, setSettings] = useState(false);

  const [MYRO, setMYRO] = useState(false);

  const [MYROExchange, setMYROExchange] = useState(false);
  
  const openMYROExchange = () => {
    setMYROExchange(!MYROExchange);
  };
  const closeMYROExchange = () => {
    setMYROExchange(!MYROExchange);
  };
  const openMYRO = () => {
    setMYRO(!MYRO);
  };
  const closeMYRO = () => {
    setMYRO(!MYRO);
  };

  const openSettings = () => {
    setSettings(!settings);
  };
  const closeSettings = () => {
    setSettings(!settings);
  };

  return (
    <div className=" w-full mayanBack h-[450px] rounded-2xl p-[16px]  flex flex-col items-center overflow-hidden relative">
      <div className="flex w-full justify-between items-center pl-[12px] mb-[16px]">
        <div className="text-[20px] font-[900]">Buy BABYMYRO</div>
        <button
          className="p-[8px] rounded-xl bg-[#44495b]"
          onClick={openSettings}
        >
          <img src={Gear} width={30} />
        </button>
      </div>

      <div className="w-full p-[16px] border border-[#44495b] relative rounded-2xl bg-[#00000033]   ">
        <div className="w-full flex justify-between items-center mb-[16px]">
          <div
            className="flex justify-center items-center py-2 px-5 bg-[#3a3b43] text-[#fff] font-[500] rounded-2xl  gap-2"
            onClick={openMYRO}
          >
            <div>BTC</div>
            <div>
              <KeyboardArrowDownIcon />
            </div>
          </div>

          <div className="flex justify-center items-center py-2 px-5 bg-[#3a3b43] text-[#fff] font-[500] rounded-2xl  gap-2" onClick={openMYROExchange}>
            <div>BTC</div>
            <div>
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </div>

        <div className="bg-white text-[22px] px-[2px] text-[#44495b] max-w-fit">
          0.00
        </div>

        <div className="p-[6px] border border-[#44495b] rounded-xl bg-[#00000073] absolute right-[45%]">
          <ArrowDownwardIcon />
        </div>
      </div>

      <div className="w-full p-[16px] border border-[#44495b] mt-[10px] rounded-2xl bg-[#00000033] mb-[20px]">
        <div className="w-full flex justify-between items-center mb-[16px]">
          <div className="flex justify-center items-center py-2 px-5 bg-[#3a3b43] text-[#fff] font-[500] rounded-2xl  gap-2">
            <div>Solana</div>
          </div>

          <div className="flex justify-center items-center py-2 px-5 bg-[#3a3b43] text-[#fff] font-[500] rounded-2xl  gap-2">
            <div>$BMYRO</div>
          </div>
        </div>

        <div className=" text-[22px] px-[2px] text-[#44495b] max-w-fit">
          0.00
        </div>
      </div>

      <div className="bg-[#2f98f9] text-white text-[17px] py-[12px] px-[8px] w-full rounded-3xl text-center">
        Connect Wallet
      </div>

      <div className="mt-[15px] flex justify-center items-center w-full text-[#667079] text-[13px]">
        Powered by Maryan
      </div>

      {settings && (
        <div className="absolute top-0 left-0 w-[360px] h-[450px] rounded-3xl bg-[#3a3b43] px-[20px] py-[20px] text-[#fff]">
          <div className="flex justify-start items-center gap-[80px] mb-[15px]">
            <button onClick={closeSettings}>
              <KeyboardArrowLeftIcon />
            </button>
            <div className="text-[21px] font-[700]">Swap Settings</div>
          </div>

          <div className="w-full p-[16px] border-2 border-[#787f96] rounded-2xl">
            <div className="">Slippage tolerance</div>
            <div className="flex justify-between items-center mt-[5px]">
              <button className="p-[5px]">Auto</button>
              <input className="bg-[#ffffffaf] rounded-lg " placeholder="%" />
            </div>
          </div>

          <div className="w-full p-[16px] border-2 border-[#787f96] rounded-2xl mt-[10px]">
            <div className="">Swap deadline</div>
            <div className="flex justify-between items-center mt-[5px] gap-[5px]">
              <input
                className="bg-[#ffffffaf] rounded-lg w-[80%]"
                placeholder="%"
              />
              <button className="p-[5px] border rounded-xl border-[#787f96]">
                Minutes
              </button>
            </div>
          </div>

          <div className="w-full flex justify-between items-center p-[20px] border-2 border-[#787f96] rounded-2xl mt-[15px]">
            <div className="">Swap deadline</div>
            <div className="flex justify-between items-center mt-[5px] gap-[5px]">
              <Switch color="default" />
            </div>
          </div>
        </div>
      )}

      {MYRO && (
        <div className="absolute top-0 left-0 w-[360px] h-[450px] rounded-3xl bg-[#3a3b43] px-[20px] py-[20px] text-[#fff]">
          <div className="flex justify-start items-center gap-[100px] mb-[15px]">
            <button onClick={closeMYRO}>
              <KeyboardArrowLeftIcon />
            </button>
            <div className="">Select Token</div>
          </div>
          <div className="flex justify-start items-center gap-[20px] w-full rounded-2xl bg-[#d8d8e6b4] px-[10px] py-[15px]">
            <SearchIcon />
            <input
              placeholder="Search"
              className="bg-transparent rounded outline-none border-0 p-[5px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MayanWallet;
