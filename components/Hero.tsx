"use client";

/* eslint-disable react/no-unescaped-entities */
import CustomButton from "@/shared/CustomButton";
import Image from "next/image";
import React from "react";

const Hero = () => {
  const handleScroll = () => {
    console.log(alert("hello"));
  };
  return (
    //Hero Introduction
    <section className="hero max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book, or rent a car -- quickly and easily!!
        </h1>
        <p className="hero__subtitle">
          We offer the best selection of cars in the market. Whether you're
          planning a road trip with friends or need a reliable ride for work,
        </p>
        <CustomButton
          title="Explore Cars"
          handleClick={handleScroll}
          containerStyles="bg-primary-blue text-white rounded-full mt-10 custom-btn-effect"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="Hero Car Image"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </section>
  );
};

export default Hero;
