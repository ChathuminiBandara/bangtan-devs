"use client";

import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#0f0f0f] border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <Link href="/" className="flex items-center space-x-2 mb-6 group">
                        <div className="text-bts-purple font-bold text-2xl flex items-center relative">
                            <span className="mr-1 group-hover:-translate-x-1 transition-transform duration-300">&lt;</span>
                            <span className="mx-0.5 text-bts-purple-light select-none">7</span>
                            <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">&gt;</span>
                        </div>
                        <span className="text-bts-purple font-bold text-xl tracking-tight group-hover:text-bts-purple-dark transition-colors">Bangtan Devs</span>
                    </Link>

                    <p className="text-bts-purple font-medium text-lg mb-8 italic">
                        Code. Purple. Forever. <span className="text-bts-purple-light">Apobangpo.</span>
                    </p>

                    <div className="flex space-x-6 mb-8">
                        {["Weverse", "Discord", "Twitter", "Instagram"].map((social) => (
                            <a key={social} href="#" className="text-bts-purple/60 hover:text-bts-purple transition-all font-medium hover:scale-110 transform">
                                {social}
                            </a>
                        ))}
                    </div>

                    <div className="text-bts-purple/40 text-sm">
                        © {new Date().getFullYear()} Bangtan Devs. Made with 💜 by ARMY.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
