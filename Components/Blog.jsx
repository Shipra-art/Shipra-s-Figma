import React from 'react'
import remove from "../assets/images/removebg.png"
import Line from "../assets/images/Line.png"
import Business from "../assets/images/Business.png"
import Blue from "../assets/images/Bluefire.png"
import Rectangle from "../assets/images/Rectangle 2.png"
import Triangle from "../assets/images/Rectangle.png"
import Circle from "../assets/images/Rectangle .png"

function Blog() {
  return (
    <div className="w-full">

      {/* HERO + CARDS WRAPPER */}
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO SECTION */}
        <div className="py-20 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Let your business thrive under our supervision
            </h1>

            <p className="text-gray-600 mt-4 text-lg">
              Launch a business today with our help and get it done with amazing
              launch features.
            </p>

            <p className="font-semibold mt-4">
              We are making every business grow!
            </p>

            <div className="border w-64 mt-8 p-3">
              <input type="text" placeholder="Full Name" className="w-full outline-none" />
            </div>

            <div className="border w-64 mt-4 p-3">
              <input type="email" placeholder="Email Address" className="w-full outline-none" />
            </div>

            <button className="bg-pink-300 px-6 py-3 rounded-lg mt-6">
              Contact Now &gt;
            </button>
          </div>

          <div className="bg-blue-50 rounded-xl flex justify-center items-center p-6 relative">
            <img src={remove} className="w-[350px] md:w-[400px] object-contain" />
            <img src={Line} className="absolute -left-20 top-20 w-52" />
            <img src={Blue} className="absolute -right-12 top-2 w-32 animate-bounce" />
            <img src={Business} className="absolute -right-20 bottom-2 w-92 h-100" />
          </div>

        </div>

        {/* TITLE */}
        <div className="text-center py-10">
          <p className="text-4xl text-blue-950">
            Our latest updates for you here!
          </p>
          <p>What's happening around the world</p>
        </div>

        {/* 🔽 CARDS SECTION (FIXED POSITION) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">

          <div>
            <img src={Rectangle} className="w-56 mx-auto" />
            <p className="mt-3 font-semibold text-center">Growth</p>
            <p className="text-center text-sm">
              15 ways to grow your saas in 21 days with no money
            </p>
            <div className="text-center mt-2">
              <span className="border border-pink-300 px-3 py-1 inline-block">&gt;</span>
            </div>
          </div>

          <div>
            <img src={Circle} className="w-56 mx-auto" />
            <p className="mt-3 font-semibold text-center">Career</p>
            <p className="text-center text-sm">
              Why everyone is moving today to subscriptions
            </p>
            <div className="text-center mt-2">
              <span className="border border-pink-300 px-3 py-1 inline-block">&gt;</span>
            </div>
          </div>

          <div>
            <img src={Triangle} className="w-56 mx-auto" />
            <p className="mt-3 font-semibold text-center">Design</p>
            <p className="text-center text-sm">
              9 ways to make it quick and never look back again
            </p>
            <div className="text-center mt-2">
              <span className="border border-pink-300 px-3 py-1 inline-block">&gt;</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Blog;
