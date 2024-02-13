import React, { useState } from "react";
import Logo from "/src/assets/images/jupiter-logo.svg";
import Refresh from "/src/assets/images/refresh.svg";
import Settings from "/src/assets/images/settings.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import SearchIcon from "@mui/icons-material/Search";
import WalletIcon from "@mui/icons-material/Wallet";

const JupiterWallet = () => {
  const [jupiterDrop, setJupiterDrop] = useState(false);

  const openJupiterDrop = () => {
    setJupiterDrop(!jupiterDrop);
  };
  const closeJupiterDrop = () => {
    setJupiterDrop(!jupiterDrop);
  };

  return (
    <div className="w-full flex flex-col justify-start items-start gap-[8px]">
      {/* ----- header start----- */}
      <div className="w-full flex flex-1 justify-between items-center">
        {/* ------ jupiter logo and name ---- */}
        <div className="flex justify-start items-center gap-[5px]">
          <img src={Logo} width={24} height={24} />
          <div>Jupiter</div>
        </div>

        <div className="flex justify-end items-center gap-[5px]">
          <button className="bg-[#f2f3f8ad] rounded-full p-[5px] border border-[#5c5f6a]">
            <img src={Refresh} width={18} height={18} />
          </button>

          <button className=" bg-[#f2f3f8ad] flex justify-center items-center p-[5px] text-[#414349] border border-[#5c5f6a] rounded-3xl gap-[7px]">
            <img src={Settings} width={18} height={18} />
            <div>0.1%</div>
          </button>
          <div className="bg-[#212128] text rounded-3xl px-[7px] py-[5px]">
            Connect Wallet
          </div>
        </div>
      </div>
      {/* ----- header ends----- */}

      <div className="w-full py-5 px-4 bg-[#212128] text-[#616f77] rounded-2xl">
        <div className="w-full flex flex-1 justify-between items-center relative mb-[8px]">
          <div
            className="flex justify-center items-center py-2 px-3 bg-[#3a3b43] text-[#fff] font-[500] rounded-2xl  gap-2"
            onClick={openJupiterDrop}
          >
            <div>BTC</div>
            <div>
              <KeyboardArrowDownIcon />
            </div>
          </div>
          {jupiterDrop && (
            <div className="absolute top-[-65px] left-[-16px] w-[400px] h-[400px] rounded-3xl bg-[#3a3b43] px-[20px] py-[20px] text-[#fff]">
              <div className="flex justify-start items-center gap-[100px] mb-[15px]">
                <button onClick={closeJupiterDrop}>
                  <KeyboardArrowLeftIcon />
                </button>
                <div className="">Select Token</div>
              </div>
              <div className="flex justify-start items-center gap-[20px] w-full rounded-2xl bg-[#212128] px-[10px] py-[15px]">
                <SearchIcon />
                <input
                  placeholder="Search"
                  className="bg-transparent rounded outline-none border-0 p-[5px]"
                />
              </div>
            </div>
          )}

          <div className="flex-1 text-[20px] text-[#5c5f6a] font-[500] flex justify-end items-center">
            <div>0.00</div>
          </div>
        </div>

        <div className="text-[#616f77] text-base pl-[5px] flex justify-start items-center gap-2">
          <div>
            <WalletIcon />
          </div>
          <div>0.0000000 USDC</div>
        </div>
      </div>

      <div className="w-full py-5 px-4 bg-[#212128] text-[#616f77] rounded-2xl">
        <div className="flex justify-center items-center py-2 px-3 bg-[#3a3b43] text-[#fff] font-[500] rounded-2xl  gap-2 max-w-[80px] mb-[8px]">
          <div>BTC</div>
        </div>
        <div className="text-[#616f77] text-base pl-[5px] flex justify-start items-center gap-2">
          <div>
            <WalletIcon />
          </div>
          <div>0.0000000 USDC</div>
        </div>
      </div>

      <div className="w-full py-6 flex justify-center items-center bg-[#212128] text-[#fff] rounded-2xl mt-[15px] text-[20px] font-semibold">
            <div>Connect Wallet</div>
      </div>
    </div>
  );
};

export default JupiterWallet;
