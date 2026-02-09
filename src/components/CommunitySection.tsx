"use client";

import { motion } from "framer-motion";
import { MessageSquare, Code2, Presentation, GraduationCap, Calendar } from "lucide-react";

const CommunitySection = () => {
    const cards = [
        {
            title: "Whalien 52 Discussions",
            desc: "A space to find your voice and connect with others who understand your code and your passion.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M2.5 12c0-4.4 3.6-8 8-8 4.4 0 8 3.6 8 8 0 2-1.2 3.8-3 5.2L12 21l-3.5-3.8C4.7 15.8 2.5 14 2.5 12z" />
                    <path d="M14 8c-1.1-1.1-2-1.5-3.5-1.5-2 0-3.5 1.5-3.5 3.5" />
                </svg>
            ), // Stylized Whale/Heart combo
        },
        {
            title: "Mikrokosmos Projects",
            desc: "Shine, dream, smile. Collaborate on projects that light up our galaxy.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2v20" />
                    <path d="M2 12h20" />
                    <path d="M4.9 4.9l14.2 14.2" />
                    <path d="M4.9 19.1L19.1 4.9" />
                </svg>
            ), // Planet/Star
        },
        {
            title: "Magic Shop Tech Talks",
            desc: "Trade your fears for inspiration. Webinars that comfort and challenge you.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M3 21h18" />
                    <path d="M5 21V7l8-4 8 4v14" />
                    <path d="M9 10a2 2 0 1 1-4 0v11" />
                </svg>
            ), // Shop/Door
        },
        {
            title: "Study with 7",
            desc: "Learning paths inspired by the members' growth mindsets and dedication.",
            icon: <GraduationCap className="w-6 h-6" />,
        },
        {
            title: "Purple Events",
            desc: "Gatherings where we celebrate our code and our fandom. Borahae!",
            icon: <Calendar className="w-6 h-6" />,
        },
    ];

    return (
        <section id="community" className="py-24 bg-gradient-to-b from-[#0f0f0f] to-[#1a0b2e]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-white mb-4"
                    >
                        What You’ll Find Here
                    </motion.h2>
                    <p className="text-xl text-white/70">A ecosystem built for growth, unity, and professional excellence.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-bts-purple/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(109,49,237,0.2)] transition-all group cursor-default"
                        >
                            <div className="mb-6 p-3 bg-bts-purple/10 rounded-xl text-bts-purple-light w-fit group-hover:bg-bts-purple group-hover:text-white transition-colors">
                                {card.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                            <p className="text-white/60 leading-relaxed font-normal">
                                {card.desc}
                            </p>
                            <div className="mt-8 overflow-hidden h-1">
                                <div className="w-full h-full bg-white/10 rounded-full relative">
                                    <div className="absolute top-0 left-0 h-full bg-bts-purple w-0 group-hover:w-full transition-all duration-500" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
