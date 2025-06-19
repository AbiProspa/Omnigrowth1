"use client";

import Image from "next/image";
import chatIcon from "@/public/chatIcon.png";
import faceIcon from "@/public/faceIcon.png";

const Navbar = () => {
  return (
    <nav className="relative z-10 flex items-center w-full pt-3">
      <div className="flex items-center pl-0">
        <span className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[45px] font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F6D] to-[#7C83FD]">
          hattl
        </span>
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
