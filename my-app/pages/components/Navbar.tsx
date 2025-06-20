"use client";

import Image from "next/image";
import logo from "@/public/logo-main.png";
import chatIcon from "@/public/chatIcon.png";
import faceIcon from "@/public/faceIcon.png";

const Navbar = () => {
  return (
    <nav className="relative z-10 flex items-center w-full pt-5">
      <div className="flex items-center pl-0 w-[10px] sm:w-[10px] md:w-[160px] lg:w-[90px]
">
        <Image
          src={logo}
          alt="Omnigrowth Logo"
          // width={140}
          // height={40}
          className="object-contain"
          priority
        />
      </div>
      <div className="flex items-center gap-1 sm:gap-2 ml-auto pr-4 sm:pr-8 md:pr-12 lg:pr-[150px]">
        <button className="flex items-center gap-2 border border-white/80 bg-transparent text-white px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs hover:bg-white/10 transition cursor-pointer h-8 sm:h-9">
          <span className="w-4 h-4 flex items-center justify-center rounded-full bg-white/10">
            <Image
              src={chatIcon}
              alt="About"
              width={12}
              height={12}
              className="object-contain"
              priority
            />
          </span>
          About
        </button>
        <button className="flex items-center gap-2 border bg-white text-black px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold shadow hover:bg-gray-100 transition cursor-pointer h-8 sm:h-9">
          <span className="w-4 h-4 flex items-center justify-center rounded-full bg-black/10">
            <Image
              src={faceIcon}
              alt="Join beta"
              width={12}
              height={12}
              className="object-contain"
              priority
            />
          </span>
          Join beta
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
