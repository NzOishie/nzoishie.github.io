'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
    const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 pt-4 md:pt-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-2 md:mb-3">
                    <div className="space-y-2 md:space-y-3 mb-2 md:mb-3">
                        <div className="flex justify-center mb-2">
                            <img
                                src="/nzoishie.jpg"
                                alt="Naz Oishie headshot"
                                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-blue-400 shadow-lg"
                            />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500">
                            Naz Oishie
                        </h1>
                        <h2 className="text-xl md:text-2xl font-bold text-white">Software Engineer</h2>
                        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                            I craft impactful software solutions with 3+ years of experience building Electronic Design Automation tools using Python, SKILL and C++ at <a href="https://eda.sw.siemens.com/en-US/" className="text-blue-400 hover:text-blue-300 transition underline" target="_blank" rel="noopener noreferrer">Siemens</a>.
                        </p>
                        <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
                            I actively build and lead tech communities as the Chapter Lead of <a  href="https://gdg.community.dev/gdg-saskatoon/" className="text-blue-400 hover:text-blue-300 transition">Google Developer Groups - Saskatoon</a>, 
                            mentor aspiring developers and support women in tech through <a href="https://www.womentechmakers.com/" className="text-purple-400 hover:text-purple-300 transition ">Women Techmakers</a>.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-2 md:mb-3">
                        <span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">Python</span>
                        <span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm">C++</span>
                        <span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">Cadence SKILL</span>
                        <span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">AI</span>
                    </div>
                </motion.div>

                {/* Interactive System Architecture */}
                <div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-3 md:p-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                            {/* Frontend Layer */}
                            <div
                                className={`p-3 md:p-4 rounded-lg transition-colors border-2 ${
                                    selectedStack === 'frontend' ? 'bg-blue-500/20 border-blue-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
                                }`}
                                onMouseEnter={() => setSelectedStack('frontend')}
                                onMouseLeave={() => setSelectedStack(null)}
                            >
                                <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-blue-400">Software Development</h3>
                                <ul className="space-y-1 md:space-y-1.5 text-xs md:text-sm text-gray-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                        Python & C++ Application Development
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                        Electronic Design Automation (EDA) Tools
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                        Performance Optimization & Algorithm Design
                                    </li>
                                </ul>
                            </div>

                            {/* Backend Layer */}
                            <div
                                className={`p-3 md:p-4 rounded-lg transition-colors border-2 ${
                                    selectedStack === 'backend' ? 'bg-purple-500/20 border-purple-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
                                }`}
                                onMouseEnter={() => setSelectedStack('backend')}
                                onMouseLeave={() => setSelectedStack(null)}
                            >
                                <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-purple-400">Backend & Systems</h3>
                                <ul className="space-y-1 md:space-y-1.5 text-xs md:text-sm text-gray-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                        Scalable Architecture & Database Systems 
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                        API Design & Integration
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                        Parsing & Processing of Large Design Files
                                    </li>
                                </ul>
                            </div>

                            {/* DevOps Layer */}
                            <div
                                className={`p-3 md:p-4 rounded-lg transition-colors border-2 ${
                                    selectedStack === 'devops' ? 'bg-teal-500/20 border-teal-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
                                }`}
                                onMouseEnter={() => setSelectedStack('devops')}
                                onMouseLeave={() => setSelectedStack(null)}
                            >
                                <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-teal-400">Mentorship & Collaboration</h3>
                                <ul className="space-y-1 md:space-y-1.5 text-xs md:text-sm text-gray-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                                        Mentoring New Engineers
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                                        Cross-Functional Team Collaboration
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                                        Code Reviews & Knowledge Sharing
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
