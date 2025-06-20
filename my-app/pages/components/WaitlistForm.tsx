"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import RoleDropdown from "@/pages/components/RoleDropdown";

type WaitlistFormProps = {
  scrollRef?: React.RefObject<HTMLElement | null>;
};

async function submitWaitlist(data: any) {
  return new Promise((resolve) => setTimeout(resolve, 1500));
}

const WaitlistForm = ({ scrollRef }: WaitlistFormProps) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    company: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await submitWaitlist(form);
    setSubmitting(false);
    setSuccess(true);
    setForm({ name: "", email: "", role: "", company: "" });
  };

  return (
    <section
      ref={scrollRef}
      className="relative z-10 w-full py-16 scroll-mt-24"
    >
      <div className="w-full">
        <h2
          className="text-[20px] sm:text-[36px] leading-[24px] font-bold text-white tracking-normal text-left"
          style={{ fontFamily: "Satoshi, sans-serif" }}
        >
          Get Early Access
        </h2>
        <p
          className="text-[19px] sm:text-[36px] leading-[64px] font-bold text-[#b0b0b0] mb-8 text-left "
          style={{ fontFamily: "Satoshi, sans-serif" }}
        >
          Join the waitlist
        </p>

        <form
          className="flex flex-col gap-6 w-full sm:px-6 md:px-0"
          onSubmit={handleSubmit}
        >
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-[#888] py-3 pr-10 pl-0 text-white placeholder-[#b0b0b0] focus:outline-none"
            />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#b0b0b0] text-xl">
              <FaArrowRight />
            </span>
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-[#888] py-3 pr-10 pl-0 text-white placeholder-[#b0b0b0] focus:outline-none"
            />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#b0b0b0] text-xl">
              <FaArrowRight />
            </span>
          </div>

          <RoleDropdown
            value={form.role}
            onChange={(role) => setForm({ ...form, role })}
          />

          <div className="relative">
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-[#888] py-3 pr-10 pl-0 text-white placeholder-[#b0b0b0] focus:outline-none"
            />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#b0b0b0] text-xl">
              <FaArrowRight />
            </span>
          </div>

          <button
            type="submit"
            disabled={submitting || success}
            className={`relative mt-4 bg-[#A9A6F9] hover:bg-[#8f8be6] text-white font-bold text-lg py-3 rounded-xl transition flex items-center justify-center gap-2 px-6 cursor-pointer ${
              (submitting || success) && "opacity-70 cursor-not-allowed"
            }`}
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            {submitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Joining...
              </>
            ) : success ? (
              <>
                Thanks for Joining!
                <MdDone className="text-2xl" />
              </>
            ) : (
              <>
                Join Waitlist
                <FaArrowRight className="text-white text-xl" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default WaitlistForm;
