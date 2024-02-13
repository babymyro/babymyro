import React, { useEffect } from "react";
import "/src/index.css";
import Image from "/src/assets/images/qutation.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import DOG from '/src/assets/images/comment_picture.svg'

const Comment = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full flex justify-center items-center font-custom text-base lg:text-[20px] font-[400] mb-[360px]">
      <div className="max-w-[780px] relative">
        <div className="border-4 p-[10px] mx-[20px] lg:mx-0 lg:p-[32px] rounded-3xl border-white flex relative justify-around items-start gap-[24px]">
          <div className="max-w-[250px] w-full h-[250px] bg-[#30e9a1] opacity-20 blurEffect absolute top-[-100px] left-[-100px]"></div>
          <div>
            <img src={Image} className="w-[64px]" />
          </div>
          <div
            className="text-base lg:text-[20px] text-[400] w-[calc(100%-64px)]"
            data-aos="zoom-in"
          >
            With Myro, we have created a revolutionary digital currency that is
            designed for simplicity, security, and accessibility.
            <br className="hidden lg:inline-block"/>
            <br />
            <br />
            Our goal is to provide a seamless crypto experience for everyone.
            Whether you are an experienced trader or a curious beginner, Myro is
            here to meet your needs and assist you in exploring the world of
            digital currencies.
          </div>
        </div>
        <div className="absolute right-[10px] lg:right-[-300px]">
            <img src={DOG}  data-aos="zoom-in"/>
        </div>
      </div>
    </div>
  );
};

export default Comment;
