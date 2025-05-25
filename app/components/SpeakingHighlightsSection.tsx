'use client';

import { motion } from 'framer-motion';

export default function SpeakingHighlightsSection() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-8 text-center text-blue-300"
                >
                    Speaking Highlights
                </motion.h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                    Here are some selected talks from my recent speaking engagements, showcasing key topics and experiences I’ve shared with diverse audiences.
                </p>
                <div className="space-y-8">
                    {/* Talk 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="bg-gray-900/40 border border-blue-900 rounded-lg p-6"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-blue-400 text-xl">🔹</span>
                            <span className="font-semibold text-base md:text-lg text-blue-200">From Research to Real-World Impact: My Journey in Software Engineering</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-1">Career Talk &bull; Apr 23, 2025 &bull; Saskatoon, SK</p>
                        <p className="text-gray-300 text-base">
                            Shared my journey from graduate research at the iSE Lab to becoming a Software Engineer at Siemens. Discussed real-world applications of research skills, building technical confidence, and the power of personal branding and networking in the tech industry.
                        </p>
                    </motion.div>
                    {/* Talk 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.05 }}
                        className="bg-gray-900/40 border border-blue-900 rounded-lg p-6"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-blue-400 text-xl">🔹</span>
                            <span className="font-semibold text-base md:text-lg text-blue-200">Code Smarter, Not Harder: How to Build AI-driven Apps with Gemini</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-1">Technical Talk &bull; Mar 27, 2025 &bull; Edmonton Redefine Possible Hackathon, AB</p>
                        <p className="text-gray-300 text-base">
                            Live demonstration of using Gemini API to create an AI-powered note-taking app. Walked through building smart productivity tools with minimal code using Google’s powerful AI models.
                        </p>
                    </motion.div>
                    {/* Talk 3 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="bg-gray-900/40 border border-blue-900 rounded-lg p-6"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-blue-400 text-xl">🔹</span>
                            <span className="font-semibold text-base md:text-lg text-blue-200">Build with Gemini: How to Integrate Gemini Models into Intelligent Software</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-1">Technical Talk & Workshop &bull; Apr 20, 2024 &bull; Ottawa, ON</p>
                        <p className="text-gray-300 text-base">
                            Covered Gemini’s capabilities in generating code from natural language, and ran hands-on sessions showing how to embed Gemini in apps. Attendees built their first AI app during the session.
                        </p>
                    </motion.div>
                    {/* Talk 4 */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="bg-gray-900/40 border border-blue-900 rounded-lg p-6"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-blue-400 text-xl">🔹</span>
                            <span className="font-semibold text-base md:text-lg text-blue-200">Supercharge Your Py Skills: 10 Tips for Crafting Elegant Python Code</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-1">Technical Talk &bull; Mar 23, 2024  &bull; Mississauga, ON</p>
                        <p className="text-gray-300 text-base">
                            Shared professional tips and clean code practices learned through years of Python development in both academic and industry settings. Designed for developers who want to write more efficient, readable, and maintainable code.
                        </p>
                    </motion.div>
                    {/* Talk 5 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="bg-gray-900/40 border border-purple-900 rounded-lg p-6"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-purple-400 text-xl">🔹</span>
                            <span className="font-semibold text-base md:text-lg text-purple-200">From Passion to Profession: Empowering Women in Diverse STEM Careers</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-1">Panel Discussion &bull; Apr 6, 2024 &bull; Calgary, AB</p>
                        <p className="text-gray-300 text-base">
                            Spoke about my career path into software engineering, overcoming challenges as a woman in tech, and the importance of resilience, representation, and mentorship.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}