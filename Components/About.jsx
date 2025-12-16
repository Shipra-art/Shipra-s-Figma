import React from "react";
import Men from "../assets/images/Men.png";
import New from "../assets/images/New.png";
import Cubic from "../assets/images/Cubic.png";

function About() {
  return (
    <div>
      {/* HERO SECTION */}
      <main className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-14">

        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="bg-blue-50 rounded-xl flex justify-center items-center p-6 relative">
            <img
              src={Men}
              className="rounded-xl object-cover w-full max-w-md"
              alt="Person"
            />

            {/* Floating Images */}
            <img
              src={New}
              className="hidden md:block absolute -right-20 bottom-16 w-[200px]"
              alt="Decor"
            />
            <img
              src={Cubic}
              className="hidden md:block absolute -left-10 top-5 w-24"
              alt="Decor"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Let your business thrive <br /> under our supervision
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Launch a business today with our help and get it done with amazing launch features.
          </p>

          <div className="mt-6 space-y-3 text-lg">
            <p>✅ Easy to use interface</p>
            <p>✅ Grow your business fast</p>
          </div>

          <button className="mt-6 bg-pink-300 px-6 py-3 rounded-lg hover:bg-pink-400 transition font-medium">
            Contact Now <span className="font-bold">&gt;</span>
          </button>
        </div>

      </main>

     
      <div className="w-full flex justify-center -mt-6 mb-20 px-4">
        <div className="max-w-6xl w-full bg-[#3b2860] p-8 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">

            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-3xl">🔥</span>
              <p className="text-sm">
                Super useful and easy to use with over 100+ customisations!
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-3xl">⚡</span>
              <p className="text-sm">
                Fast performance with smooth experience.
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-3xl">⭐</span>
              <p className="text-sm">
                Trusted by 100+ businesses worldwide.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
