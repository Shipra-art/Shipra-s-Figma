import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import About from "../Components/About";
import Blog from "../Components/Blog";
import Services from "../Components/Services";
import Questions from "../Components/Questions";

import Lady from "../assets/images/Lady.png";
import New from "../assets/images/New.png";
import Hero from "../assets/images/hero .png";
import File from "../assets/images/File.png";
import First from "../assets/images/First.png";
import Second from "../assets/images/Second.png";
import Third from "../assets/images/Third.png";
import Fourth from "../assets/images/Fourth.png";
import Five from "../assets/images/Five.png";

export default function HeroSection() {
  const floatImgRef = useRef(null);

  // TYPEWRITER EFFECT
  useEffect(() => {
    const text = "Launch a software business website today with us!";
    const el = document.getElementById("typeWriterText");

    let i = 0;
    let deleting = false;

    function typeLoop() {
      if (!el) return;

      const speed = deleting ? 40 : 100;

      if (!deleting) {
        el.textContent = text.substring(0, i + 1);
        i++;
        if (i === text.length) setTimeout(() => (deleting = true), 1000);
      } else {
        el.textContent = text.substring(0, i - 1);
        i--;
        if (i === 0) deleting = false;
      }
      setTimeout(typeLoop, speed);
    }

    typeLoop();
  }, []);

  // LOGO SLIDE
  useEffect(() => {
    gsap.to(".logo-slide", {
      x: 80,
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  // FLOATING IMAGE (FIXED)
  useEffect(() => {
    if (!floatImgRef.current) return;

    gsap.to(floatImgRef.current, {
      y: -15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            <span id="typeWriterText" className="inline-block"></span>
            <span className="inline-block w-1 h-10 bg-black animate-blink ml-1"></span>
          </h1>

          <div className="flex items-center gap-4 mt-6">
            <button className="bg-pink-300 px-6 py-3 rounded-lg">
              Contact Now
            </button>
            <button className="border border-pink-300 px-6 py-3 rounded-lg text-xl">
              &gt;
            </button>
            <p className="text-xl font-medium">Book a Demo Today</p>
          </div>

          <p className="mt-4">⭐ Rated 4.9 out of 1200 reviews</p>
        </div>

        {/* RIGHT */}
        <div className="bg-pink-100 rounded-xl flex justify-center items-center p-6 relative">

          <img
            ref={floatImgRef}
            src={Lady}
            className="w-[350px] md:w-[400px]"
            alt="Lady"
          />

          <img
            src={New}
            className="hidden md:block absolute -left-16 top-16 w-[200px]"
            alt="New"
          />

          <img
            src={Hero}
            className="hidden md:block absolute -right-10 top-5 w-24"
            alt="Hero"
          />
        </div>
      </div>

      {/* LOGOS */}
      <div className="w-full flex justify-center">
        <div className="border border-black rounded-xl px-22 py-19 flex flex-wrap justify-center items-center gap-10 max-w-9xl">
          <p className="text-gray-700 font-medium whitespace-nowrap">
            Trusted by over 100+ businesses worldwide!
          </p>

          <img src={File} className="logo-slide w-14" />
          <img src={First} className="logo-slide w-14" />
          <img src={Second} className="logo-slide w-14" />
          <img src={Third} className="logo-slide w-14" />
          <img src={Fourth} className="logo-slide w-14" />
          <img src={Five} className="logo-slide w-14" />
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <About />
      <Blog />
      <Services />
      <Questions />
    </div>
  );
}

