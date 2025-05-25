'use client';

import { motion } from 'framer-motion';

export default function ExperienceSection() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center"
                >
                    Experience
                </motion.h2>

                <div className="space-y-10">
                    {/* Siemens EDA */}
                    <div>
                        <h3 className="text-xl font-semibold text-blue-400">Siemens EDA <span className="text-gray-400 font-normal">• Saskatoon, Canada</span></h3>
                        <p className="text-gray-400 text-sm mb-2">May 2022 – Present</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-300 text-base">
                            <li>Develop high-performance tools for Electronic Design Automation using Python and C++, focusing on parsing, simulation, and visualization of large-scale circuit design data.</li>
                            <li>Contributed to scalable architecture and core algorithm enhancements that improved performance and maintainability.</li>
                            <li>Collaborated cross-functionally with QA, UX, and DevOps teams to ensure product reliability and usability.</li>
                            <li>Mentor new hires and interns, guiding them through onboarding, codebases, and best practices.</li>
                        </ul>
                    </div>

                    {/* Graduate Research Assistant */}
                    <div>
                        <h3 className="text-xl font-semibold text-purple-400">Graduate Research Assistant <span className="text-gray-400 font-normal">• University of Saskatchewan</span></h3>
                        <p className="text-gray-400 text-sm mb-2">Sep 2019 – Feb 2022</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-300 text-base">
                            <li>Conducted research in AI and Software Engineering, focusing on intelligent systems and automation, and contributed to academic publications.</li>
                            <li>Developed tools to visualize scientific workflows, classify software release notes, and detect bug-inducing commits using automation and ML techniques.</li>
                            <li>Designed and implemented data scraping and processing pipelines to collect and analyze large datasets from software repositories and online platforms.</li>
                        </ul>
                    </div>

                    {/* Research Assistant */}
                    <div>
                        <h3 className="text-xl font-semibold text-teal-400">Research Assistant <span className="text-gray-400 font-normal">• Wilfrid Laurier University</span></h3>
                        <p className="text-gray-400 text-sm mb-2">May 2021 – Jun 2021</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-300 text-base">
                            <li>Participated in a summer research project focused on analyzing large datasets for academic and business insights.</li>
                        </ul>
                    </div>

                    {/* Graduate Teaching Assistant */}
                    <div>
                        <h3 className="text-xl font-semibold text-blue-400">Graduate Teaching Assistant <span className="text-gray-400 font-normal">• University of Saskatchewan</span></h3>
                        <p className="text-gray-400 text-sm mb-2">Sep 2019 – Dec 2021</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-300 text-base">
                            <li>Assisted in teaching Python, Java (OOP), Web Development, and Database courses.</li>
                            <li>Designed lab content, mentored students, and supported course delivery in both CS and Business faculties.</li>
                        </ul>
                    </div>

                    {/* Lecturer */}
                    <div>
                        <h3 className="text-xl font-semibold text-purple-400">Lecturer <span className="text-gray-400 font-normal">• Leading University, Bangladesh</span></h3>
                        <p className="text-gray-400 text-sm mb-2">May 2019 – Aug 2019</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-300 text-base">
                            <li>Taught Structured Programming (C), Object-Oriented Programming (Java), and Operating Systems.</li>
                            <li>Designed course materials, delivered lectures, and guided students in foundational CS topics.</li>
                        </ul>
                    </div>

                    {/* Intern Engineer */}
                    <div>
                        <h3 className="text-xl font-semibold text-teal-400">Intern Engineer <span className="text-gray-400 font-normal">• W3Engineers Ltd., Bangladesh</span></h3>
                        <p className="text-gray-400 text-sm mb-2">Jan 2019 – Apr 2019</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-300 text-base">
                            <li>Worked on full-stack web development projects using Flask, Vue.js, JavaScript, HTML/CSS.</li>
                            <li>Collaborated with cross-functional teams on multiple client-facing projects.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}