import React from 'react'
import { owner } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-[80%] lgl:w-1/2 flex justify-center items-center relative overflow-hidden">
      <img
        className=" z-10"
        src={owner}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner