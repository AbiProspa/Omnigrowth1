import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaReddit,
  FaTiktok,
  FaTwitch,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent py-8 flex flex-col items-center text-center px-4 sm:px-6">
      <p className="mb-6 text-white text-base sm:text-lg md:text-xl font-medium max-w-xl leading-relaxed">
        Witness the beginning of an industry shift, <br className="hidden sm:block" />
        join the revolution early.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-6 text-xl sm:text-2xl text-[#b0b0b0]">
        <a href="#" aria-label="LinkedIn" className="hover:text-white">
          <FaLinkedin />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-white">
          <FaInstagram />
        </a>
        <a href="#" aria-label="Facebook" className="hover:text-white">
          <FaFacebook />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-white">
          <FaTwitter />
        </a>
        <a href="#" aria-label="Reddit" className="hover:text-white">
          <FaReddit />
        </a>
        <a href="#" aria-label="TikTok" className="hover:text-white">
          <FaTiktok />
        </a>
        <a href="#" aria-label="Twitch" className="hover:text-white">
          <FaTwitch />
        </a>
      </div>

      <div className="text-sm sm:text-base text-[#b0b0b0]">
        © All Rights Reserved. Techverse Inc.
      </div>
    </footer>
  );
}
