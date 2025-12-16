import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../assets/images/Logo.png';

function Navbar() {
    return (
        <header className="w-full bg-white py-5  top-0 ">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between">
                    <img 
                        src={Logo} 
                        className="w-28 h-12" 
                        alt="Logo" 
                    />
                    <ul className="flex gap-8 text-[#1b1b3a] font-medium">
                        <Link to="/" className="cursor-pointer hover:text-pink-500">Home</Link>
                        <Link to="/About" className="cursor-pointer hover:text-pink-500">About</Link>
                        <Link to="/Blog" className="cursor-pointer hover:text-pink-500">Blog</Link>
                        <Link to="/Services" className="cursor-pointer hover:text-pink-500">Services</Link>
                        <Link to="/Questions" className="cursor-pointer hover:text-pink-500">Ques/Ans</Link>
                    </ul>
                    <button className="bg-pink-300 px-6 py-2 rounded-lg font-medium hover:bg-pink-400 transition">
                        Contact Now
                    </button>

                </div>
            </div>
        </header>
    );
}

export default Navbar;
