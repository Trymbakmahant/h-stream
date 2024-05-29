"use client";
import { Navbar } from "@/components/navbar/Navbar";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import HeroSection from "@/components/LandingPage/HeroSection";
import Explore from "@/components/LandingPage/Explore";
import WhyChooseUs from "@/components/LandingPage/WhyChooseUs";
import Footer from "@/components/LandingPage/Footer";

export default function ThreeDCardDemo() {
  return (
    <div className="flex flex-col justify-center gap-2 ">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />
      {/* Explore Features */}
      <Explore />
      {/* Why Choose us */}
      <WhyChooseUs />
      {/* Footer */}
      <Footer />
    </div>
  );
}
