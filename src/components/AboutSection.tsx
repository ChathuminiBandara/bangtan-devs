"use client";

import { motion } from "framer-motion";
import { Heart, TrendingUp, Users } from "lucide-react";

const AboutSection = () => {
    const values = [
        {
            title: "Passion",
            desc: "“Because the dawn right before the sun rises is the darkest.” – Tomorrow",
            icon: <TrendingUp className="w-8 h-8" />,
        },
        {
            title: "Self-Love",
            desc: "“I’m the one I should love in this world.” – Epiphany",
            icon: <Heart className="w-8 h-8" />,
        },
        {
            title: "Unity",
            desc: "“You gave me the best of me, so you'll give you the best of you.” – Magic Shop",
            icon: <Users className="w-8 h-8" />,
        },
    ];

    return (
        <section id="about" className="py-24 bg-[#0f0f0f] overflow-hidden relative">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-bts-purple/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-bts-purple/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-white mb-4"
                    >
                        Who We Are
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/70 max-w-2xl mx-auto italic"
                    >
                        "Teamwork makes the dream work." <br />
                        We’re developers. We’re ARMYs. We build with love.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-bts-purple/50 transition-all soft-glow group hover:-translate-y-1"
                        >
                            <div className="mb-6 p-4 bg-bts-purple/10 rounded-2xl text-bts-purple-light group-hover:bg-bts-purple group-hover:text-white transition-colors duration-300">
                                {value.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                            <p className="text-white/60 leading-relaxed italic">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
