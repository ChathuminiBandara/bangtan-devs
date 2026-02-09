"use client";

import { motion } from "framer-motion";
import StarsBackground from "./StarsBackground";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#0f0f0f]">
            {/* 3D Background */}
            <StarsBackground />

            {/* Overlay Gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f0f]/50 to-[#0f0f0f] z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-[#a881f8] font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base animate-pulse">
                        Microcosmos of Code
                    </h2>
                    <h1 className="text-6xl md:text-9xl font-black text-white mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(168,129,248,0.5)]">
                        Bangtan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6d31ed] to-[#a881f8]">Devs</span>
                    </h1>
                    <p className="text-2xl md:text-3xl font-medium text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                        Shine, dream, smile. <br className="hidden md:block" />
                        <span className="text-[#a881f8]">Code. Purple. Forever.</span>
                    </p>
                    <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light">
                        A safe haven where technology meets the magic of 7.
                        Join the galaxy of Sri Lankan developer ARMYs.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <button className="px-10 py-4 bg-[#6d31ed] text-white rounded-full font-bold text-lg hover:bg-[#4a148c] transition-all shadow-[0_0_20px_rgba(109,49,237,0.4)] hover:shadow-[0_0_30px_rgba(109,49,237,0.6)] hover:scale-105 active:scale-95 duration-300">
                            Join the Galaxy
                        </button>
                        <button className="px-10 py-4 bg-transparent border-2 border-[#a881f8] text-[#a881f8] rounded-full font-bold text-lg hover:bg-[#a881f8]/10 transition-all hover:scale-105 active:scale-95 duration-300 backdrop-blur-sm">
                            Explore Our Universe
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
