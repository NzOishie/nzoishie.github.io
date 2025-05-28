'use client';

import { motion } from 'framer-motion';

export default function ExperienceSection() {
    return (
        <section className="py-20 px-4 relative">
            {/* Decorative background gradient */}
            {/* <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-40 bg-gradient-to-r from-purple-700 via-blue-700 to-teal-500 opacity-20 blur-2xl rounded-full" />
            </div> */}
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg"
                >
                    Experience
                </motion.h2>

                <div className="space-y-10">
                    {/* Siemens EDA */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-900/60 border border-blue-900 rounded-xl p-6 shadow-lg hover:scale-[1.02] hover:border-blue-400 transition-all"
                    >
                        <h3 className="text-xl font-semibold text-blue-400">Siemens EDA <span className="text-gray-400 font-normal">• Saskatoon, Canada</span></h3>
                        <p className="text-gray-400 text-sm mb-2">May 2022 – Present</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-300 text-base">
                            <li>Develop high-performance tools for Electronic Design Automation using Python and C++, focusing on parsing, simulation, and visualization of large-scale circuit design data.</li>
                            <li>Contributed to scalable architecture and core algorithm enhancements that improved performance and maintainability.</li>
                            <li>Collaborated cross-functionally with QA, UX, and DevOps teams to ensure product reliability and usability.</li>
                            <li>Mentor new hires and interns, guiding them through onboarding, codebases, and best practices.</li>
                        </ul>
                    </motion.div>

                    {/* Graduate Research Assistant */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-gray-900/60 border border-purple-900 rounded-xl p-6 shadow-lg hover:scale-[1.02] hover:border-purple-400 transition-all"
                    >
                        <h3 className="text-xl font-semibold text-purple-400">Graduate Research Assistant <span className="text-gray-400 font-normal">• University of Saskatchewan</span></h3>
                        <p className="text-gray-400 text-sm mb-2">Sep 2019 – Feb 2022</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-300 text-base">
                            <li>Conducted research in AI and Software Engineering, focusing on intelligent systems and automation, and contributed to academic publications.</li>
                            <li>Developed tools to visualize scientific workflows, classify software release notes, and detect bug-inducing commits using automation and ML techniques.</li>
                            <li>Designed and implemented data scraping and processing pipelines to collect and analyze large datasets from software repositories and online platforms.</li>
                        </ul>
                    </motion.div>

                    {/* Research Assistant */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gray-900/60 border border-teal-900 rounded-xl p-6 shadow-lg hover:scale-[1.02] hover:border-teal-400 transition-all"
                    >
                        <h3 className="text-xl font-semibold text-teal-400">Research Assistant <span className="text-gray-400 font-normal">• Wilfrid Laurier University</span></h3>
                        <p className="text-gray-400 text-sm mb-2">May 2021 – Jun 2021</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-300 text-base">
                            <li>Participated in a summer research project focused on analyzing large datasets for academic and business insights.</li>
                        </ul>
                    </motion.div>

                    {/* Graduate Teaching Assistant */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-gray-900/60 border border-blue-900 rounded-xl p-6 shadow-lg hover:scale-[1.02] hover:border-blue-400 transition-all"
                    >
                        <h3 className="text-xl font-semibold text-blue-400">Graduate Teaching Assistant <span className="text-gray-400 font-normal">• University of Saskatchewan</span></h3>
                        <p className="text-gray-400 text-sm mb-2">Sep 2019 – Dec 2021</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-300 text-base">
                            <li>Assisted in teaching Python, Java (OOP), Web Development, and Database courses.</li>
                            <li>Designed lab content, mentored students, and supported course delivery in both CS and Business faculties.</li>
                        </ul>
                    </motion.div>

                    {/* Lecturer */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-gray-900/60 border border-purple-900 rounded-xl p-6 shadow-lg hover:scale-[1.02] hover:border-purple-400 transition-all"
                    >
                        <h3 className="text-xl font-semibold text-purple-400">Lecturer <span className="text-gray-400 font-normal">• Leading University, Bangladesh</span></h3>
                        <p className="text-gray-400 text-sm mb-2">May 2019 – Aug 2019</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-300 text-base">
                            <li>Taught Structured Programming (C), Object-Oriented Programming (Java), and Operating Systems.</li>
                            <li>Designed course materials, delivered lectures, and guided students in foundational CS topics.</li>
                        </ul>
                    </motion.div>

                    {/* Intern Engineer */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-gray-900/60 border border-teal-900 rounded-xl p-6 shadow-lg hover:scale-[1.02] hover:border-teal-400 transition-all"
                    >
                        <h3 className="text-xl font-semibold text-teal-400">Intern Engineer <span className="text-gray-400 font-normal">• W3Engineers Ltd., Bangladesh</span></h3>
                        <p className="text-gray-400 text-sm mb-2">Jan 2019 – Apr 2019</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-300 text-base">
                            <li>Worked on full-stack web development projects using Flask, Vue.js, JavaScript, HTML/CSS.</li>
                            <li>Collaborated with cross-functional teams on multiple client-facing projects.</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}