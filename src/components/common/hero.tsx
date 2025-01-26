import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="relative w-full h-60 sm:h-80 md:h-[500] mt-[58px] md:mt-24">
        <Image src="/hero.jpg" alt="hero-bg" fill className="object-cover" />
        <div className="absolute bg-black/70 w-full h-full">
          <div className="text-white text-center flex flex-col justify-center items-center h-full sm:w-4/5 md:w-3/5 mx-auto max-md:p-4">
            <p className="text-xl sm:text-2xl md:text-4xl font-bold leading-14">
              Stay Ahead Of The Curve: Stay Informed With Our Blog For The
              Latest Industry Insights
            </p>
            <p className="text-sm md:text-lg font-normal mt-3 md:mt-1">
              Insights that inspire success: uncover a wealth of knowledge by
              staying updated
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
