import React, { useState } from "react";
import Fire from "../assets/images/Bluefire.png";


function Questions() {
  // Each FAQ individual toggle
  const [open, setOpen] = useState({
    q1: false,
    q2: false,
    q3: false,
    q4: false,
  });

  const QAHeader = (
    <div className="bg-[#3E3373] text-white px-6 py-4 rounded-lg flex items-center justify-between">
      <h2 className="text-sm font-semibold">
        What is the best way to create a saas business today?
      </h2>
      <span className="text-xl font-bold">-</span>
    </div>
  );

  const QAText = (
    <div className="mt-6 space-y-10 text-gray-700 leading-normal">
      <p>
        Launch a business today with our help and get it done with amazing launch
        features and websites. We help businesses like yours thrive every day.
      </p>

      <p>
        Launch a business today with our help and get it done with amazing launch
        features and websites. We help businesses like yours thrive every day.
      </p>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto py-10">
      <div className="flex justify-center items-center animate-bounce">
        <img src={Fire}/>  
           </div>
      <div className="mb-10">
        <p className="text-center text-3xl  text-blue-950 font-bold">
          Frequently asked questions
        </p>
        <p className="text-center text-gray-600">
          Whats happening around the World.
        </p>
      </div>
      <div className="space-y-6">
        <div
          className="border rounded-lg px-6 py-5 flex items-center justify-between cursor-pointer"
          onClick={() => setOpen({ ...open, q1: !open.q1 })}
        >
          <p className="text-gray-800 text-sm">
            What is the best way to create a saas business today?
          </p>
          <span className="text-xl font-bold">{open.q1 ? "-" : "+"}</span>
        </div>

        {open.q1 && (
          <>
            {QAHeader}
            {QAText}
          </>
        )}

        {/* FAQ 2 */}
        <div
          className="border rounded-lg px-6 py-5 flex items-center justify-between cursor-pointer"
          onClick={() => setOpen({ ...open, q2: !open.q2 })}
        >
          <p className="text-gray-800 text-sm">
            What is the best way to create a saas business today?
          </p>
          <span className="text-xl font-bold">{open.q2 ? "-" : "+"}</span>
        </div>

        {open.q2 && (
          <>
            {QAHeader}
            {QAText}
          </>
        )}

        {/* FAQ 3 */}
        <div
          className="border rounded-lg px-6 py-5 flex items-center justify-between cursor-pointer"
          onClick={() => setOpen({ ...open, q3: !open.q3 })}
        >
          <p className="text-gray-800 text-sm">
            What is the best way to create a saas business today?
          </p>
          <span className="text-xl font-bold">{open.q3 ? "-" : "+"}</span>
        </div>

        {open.q3 && (
          <>
            {QAHeader}
            {QAText}
          </>
        )}

        {/* FAQ 4 */}
        <div
          className="border rounded-lg px-6 py-5 flex items-center justify-between cursor-pointer"
          onClick={() => setOpen({ ...open, q4: !open.q4 })}
        >
          <p className="text-gray-800 text-sm">
            What is the best way to create a saas business today?
          </p>
          <span className="text-xl font-bold">{open.q4 ? "-" : "+"}</span>
        </div>

        {open.q4 && (
          <>
            {QAHeader}
            {QAText}
          </>
        )}
      </div>

      {/* Buttons */}
      <div className="mt-14 flex items-center justify-center gap-4">
        <button className="bg-[#F3D7D8] text-black px-6 py-3 rounded-md text-sm font-semibold">
          Contact Now
        </button>

        <div className="flex items-center gap-3">
          <button className="border px-4 py-3 border-pink-400 rounded-md text-lg font-bold">
            &gt;
          </button>
          <p className="text-sm font-semibold">Book a Demo Today</p>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full py-6 px-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={Fire} className="w-6" />
          <h1 className="text-2xl font-bold">uifry</h1>
        </div>

        <div className="flex items-center gap-10 text-sm font-semibold text-black">
          <p>Home</p>
          <p>About</p>
          <p>Pricing</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Questions;
