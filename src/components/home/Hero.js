"use client";

import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full  justify-between items-center">
      <div className="w-full h-1/2 flex  items-center md:w-1/2 md:h-full">
        <div className="p-10 md:p-20">
          <h1 className="text-base font-semibold text-primary dark:text-darkPrimary md:text-xl">
            Hello Everyone 👋, I'am
            <span
              className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#da00ff] to-[#8000ff] block text-4xl mt-1 lg:text-5xl"
            >
              Nanda
            </span>
          </h1>
          <div>
            <h2 className="flex font-medium text-secondary text-lg mb-5 lg:text-2xl text-[#64748b] dark:text-[#869cbb]">
              Beginner Web
              <span className="text-black dark:text-white font-semibold ml-2">
                <Typewriter
                  options={{
                    strings: ["Programmer", "Devoloper"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h2>
          </div>
          <p className="font-medium text-secondary mb-10 leading-relaxed text-[#64748b] dark:text-[#869cbb]">
            Nice to meet you,
            <span className="text-black dark:text-white font-semibold"> Thank you</span>
          </p>
          <Link href="#mulai" className="bg-primary dark:bg-darkPrimary text-base font-semibold text-white py-3 px-8 rounded-full hover:shadow-xl hover:text-black transition duration-300 ease-in-out">Get Started</Link>
        </div>
      </div>
      <div className="w-full h-1/2 flex justify-center items-center md:w-1/2 md:h-full">
  <div className="animate-bounce">
    <Image src="/hero.png" width={500} height={500} alt="hero"></Image>
  </div>
</div>

    </div>
  );
};

export default Hero;
