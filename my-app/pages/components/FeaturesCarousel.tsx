"use client";

import Image from "next/image";
import GroupImage from "@/public/GroupImage.gif";

type Feature = {
  title: string;
  text: string;
};

const features: Feature[] = [
  {
    title: "Autonomous Strategy Engine",
    text: "From email to ads, social, SMS, and landing pages—create, launch, and manage all your campaigns in one unified platform.",
  },
  {
    title: "Fullstack Growth Automation",
    text: "Automate workflows across all your growth tools—from outreach to analytics—with one powerful AI brain.",
  },
  {
    title: "AI-Powered Creatives",
    text: "Generate high-converting copy, creatives and videos tailored to each channel using our built-in creative engine and templates.",
  },
  {
    title: "Real-Time Optimization & Learning",
    text: "Our system continuously learns from your performance data and automatically optimizes campaigns to improve results every day.",
  },
];

export default function FeaturesCarousel() {
  return (
    <section className="pt-[100px] pr-4 font-satoshi">
      <h2 className="text-white font-semibold text-[28px] text-left mb-8 md:text-[32px] lg:text-[36px]">
        What we’re Building
      </h2>

      <div className="overflow-hidden mx-auto max-w-full">
        <div className="flex w-max gap-6 animate-scroll-left">
          {[...Array(2)].map((_, idx) => (
            <div className="flex gap-6" key={idx}>
              {features.map((feature, index) => (
                <div
                  key={`${idx}-${index}`}
                  className="min-w-[260px] max-w-[280px] sm:min-w-[280px] sm:max-w-[300px] shrink-0 p-5 rounded-[12px] text-white text-left bg-[#1f1f1f]"
                >
                  <div className="bg-[#D9D9D9] w-40 h-25 flex items-center justify-center rounded-lg mb-4">
                    <Image
                      src={GroupImage}
                      alt={feature.title}
                      width={40}
                      height={40}
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[16px] md:text-[17px] lg:text-[18px] text-[#ededed] leading-[1.4]">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  