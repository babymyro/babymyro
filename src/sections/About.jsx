import React, {useEffect} from "react";
import Image from "/src/assets/images/about_picture.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className="flex flex-col lg:flex-row justify-around lg:justify-around items-center lg:items-start px-[20px] mb-[100px] lg:mb-[240px]" id="About">
      <div data-aos="zoom-in">
        <img src={Image} />
      </div>
      <div className="flex flex-col justify-start items-start font-custom lg:w-[41vw] lg:mt-o" data-aos="zoom-in">
        <div className="text-[36px] lg:text-[72px] font-[700]">About $MYRO</div>
        <br/>
        <div className="text-base lg:text-[20px] font-[400]">
          Many may ask, what is Myro? Myro is the name of the dog owned by Raj
          Gokal, one of the co-founders of Solana. This project pays homage to
          him, and his dog, and responds to the popular demand for dog-based
          narratives in the crypto space. Myro was created in response to this
          demand, and to provide value to the ecosystem created by Raj and his
          partner — the Solana blockchain.
          <br className="hidden lg:inline-block"/>
          <br />
          <br />
          Myro is more than just a cryptocurrency, it is also a movement. We
          believe that Solana has the potential to change the world for the
          better, and we are committed to making it more inclusive and welcoming
          for everyone.
        </div>
      </div>
    </div>
  );
};

export default About;
