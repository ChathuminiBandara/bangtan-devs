"use client";

import { motion } from "framer-motion";

const JoinSection = () => {
    return (
        <section id="join" className="py-24 purple-gradient relative overflow-hidden">
            {/* Abstract light effects */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-lg p-12 md:p-16 rounded-[40px] border border-white/20 shadow-2xl"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Join Bangtan Devs</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Be part of the premier Sri Lankan community where developer excellence meets BTS-inspired values.
                        Connect, grow, and build with ARMYs in tech.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <button className="w-full sm:w-auto px-12 py-4 bg-white text-bts-purple rounded-full font-bold text-lg hover:bg-bts-purple-light hover:text-white transition-all shadow-xl">
                            Join Discord
                        </button>
                        <button className="w-full sm:w-auto px-12 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                            Email Sign Up
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default JoinSection;
