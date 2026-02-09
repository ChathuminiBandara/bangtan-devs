"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="text-white font-bold text-2xl flex items-center relative">
                            <span className="mr-1 group-hover:-translate-x-1 transition-transform duration-300 text-bts-purple-light">&lt;</span>
                            <span className="mx-0.5 text-white select-none">7</span>
                            <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300 text-bts-purple-light">&gt;</span>
                        </div>
                        <span className="text-white font-bold text-xl tracking-tight group-hover:text-bts-purple-light transition-colors">Bangtan Devs</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#about" className="text-white/70 hover:text-bts-purple-light font-medium transition-colors">Who We Are</Link>
                        <Link href="#community" className="text-white/70 hover:text-bts-purple-light font-medium transition-colors">Community</Link>
                        <Link href="#join" className="px-6 py-2.5 bg-bts-purple text-white rounded-full font-semibold hover:bg-bts-purple-light transition-all soft-glow purple-glow-hover">
                            Join Community
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button className="text-white p-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
