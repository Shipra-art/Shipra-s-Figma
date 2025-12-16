import React from 'react'
import Cubic from "../assets/images/Cubic.png"
import Men from "../assets/images/image 17.png"
import Client from "../assets/images/Clients.png"

function Services() {
  return (
    <div className="w-full">

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Let your business thrive under our supervision
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Launch a business today with our help and get it done with amazing launch features.
          </p>

          <div className="flex gap-5 mt-5">
            <div className="flex">
              <span className="bg-pink-200 px-2">✅</span>
              <p className="ml-2">100+ <span className="block text-md">Successful Projects</span></p>
            </div>

            <div className="flex">
              <span className="bg-pink-200 px-2">✅</span>
              <p className="ml-2">100+ <span className="block text-md">Successful Projects</span></p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <button className="bg-pink-300 px-6 py-3 rounded-lg">Contact Now</button>
            <button className="border border-pink-300 px-6 py-3 rounded-lg text-xl">&gt;</button>
            <p className="text-xl font-medium">Book a Demo Today</p>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE LIKE ABOUT PAGE */}
        <div className="w-full flex justify-center relative">
          <div className="bg-blue-50 rounded-xl flex justify-center items-center p-6 relative">

            {/* MAIN MEN IMAGE */}
            <img
              src={Men}
              alt="Business Man"
              className="rounded-xl object-cover w-full max-w-md"
            />

            {/* FLOATING IMAGES */}
            <img
              src={Client}
              className="hidden md:block absolute -right-20 bottom-16 w-[200px]"
              alt="Clients"
            />

            <img
              src={Cubic}
              className="hidden md:block absolute -left-10 top-5 w-24"
              alt="Cube"
            />

          </div>
        </div>

      </div>

      {/* INFO BOXES */}
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
  )
}

export default Services
