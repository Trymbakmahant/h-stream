import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      className="h-screen justify-around items-center  pt-24 flex "
      style={{
        background: "linear-gradient(to bottom, #93F7F9  75%, #ffffff)",
      }}
    >
      <div className="w-[40%] flex-col gap-3 flex max-w-[500px]">
        <span className="font-semibold text-4xl">
          Develop your <span className="text-[#51f359]">skills </span>
          <br />
          anytime you choose
        </span>
        <span className="text-sm">
          Welcome to h-Stream, where educators thrive and learners flourish.
          Discover, learn, and connect with our innovative platform. From
          empowering teachers to sharing knowledge, {`we're`} here to inspire
          your learning journey. Join us today and unlock a world of
          possibilities.
        </span>
        <ConnectButton label="Start your learning Journey" />
      </div>
      <div className="w-[40%]">
        <Image src="/learing.svg" height={400} width={400} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
