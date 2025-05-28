'use client';

import { motion } from 'framer-motion';

export default function PersonalProjectsSection() {
    return (
        <section className="py-24 px-4 relative">
            {/* Decorative gradient blur background */}
            {/* <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-gradient-to-r from-blue-700 via-purple-700 to-teal-500 opacity-20 blur-2xl rounded-full" />
            </div> */}
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg"
                >
                    Personal Projects
                </motion.h2>

                <div className="space-y-16">
                    {/* AI-Powered Note-Taking App */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70 border border-blue-900 rounded-xl shadow-lg hover:scale-[1.02] transition-all"
                    >
                        <div className="p-8 space-y-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-blue-400 text-2xl">💡</span>
                                <span className="font-bold text-xl">AI-Powered Note-Taking App</span>
                            </div>
                            <p className="text-gray-300">
                                Built a smart note-taking application that uses Google’s Gemini API to summarize meetings and extract action items from transcripts in real time.
                            </p>
                            <p className="text-sm text-blue-300">
                                <b>Tech Stack:</b> Gemini API, Streamlit, Python (backend)
                            </p>
                            <p className="text-sm text-teal-300">
                                <b>Highlight:</b> Showcased at multiple conferences to demonstrate how to integrate LLMs into productivity tools.
                            </p>
                        </div>
                    </motion.div>

                    {/* Commit Checker: Bug-Inducing Commit Detector */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70 border border-red-900 rounded-xl shadow-lg hover:scale-[1.02] transition-all"
                    >
                        <div className="p-8 space-y-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-red-400 text-2xl">🐞</span>
                                <span className="font-bold text-xl">Commit Checker: Bug-Inducing Commit Detector</span>
                            </div>
                            <p className="text-gray-300">
                                A toolset developed to detect potential bug-inducing commits in codebases using machine learning techniques. The solution includes:
                            </p>
                            <ul className="list-disc list-inside text-gray-400 text-sm ml-4">
                                <li>
                                    <b>Commit Checker – VSCode Extension:</b> A developer-friendly plugin built with TypeScript that integrates into the editor and alerts users to potentially risky commits in real time.
                                </li>
                                <li>
                                    <b>Command Line Interface Tool:</b> A Python-based CLI version to allow quick checks and automation in CI/CD pipelines.
                                </li>
                            </ul>
                            <p className="text-sm text-blue-300">
                                <b>Machine Learning Models Used:</b> Random Forest, Decision Tree, Logistic Regression — trained on commit metadata and historical bug data.
                            </p>
                            <p className="text-sm text-blue-300">
                                <b>Tech Stack:</b> TypeScript (VSCode Extension), Python, scikit-learn, Git
                            </p>
                            <p className="text-sm text-teal-300">
                                <b>Highlight:</b> Supports proactive code review by surfacing commit-level risks before merge. Combines editor integration and automation for developer efficiency.
                            </p>
                        </div>
                    </motion.div>

                    {/* VizProv: Scientific Workflow Visualization Tool */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70 border border-yellow-900 rounded-xl shadow-lg hover:scale-[1.02] transition-all"
                    >
                        <div className="p-8 space-y-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-yellow-400 text-2xl">🔍</span>
                                <span className="font-bold text-xl">VizProv: Scientific Workflow Visualization Tool</span>
                            </div>
                            <p className="text-gray-300">
                                A web-based visualization framework designed to explore and analyze scientific workflow provenance data. The tool features multiple highly customizable interactive views that enable users to trace data lineage, understand execution dependencies, and analyze large workflow graphs efficiently.
                            </p>
                            <p className="text-sm text-blue-300">
                                <b>Tech Stack:</b> Vue.js · D3.js
                            </p>
                            <p className="text-sm text-teal-300">
                                <b>Highlight:</b> Enhanced with rich interactivity and flexibility to support research and analysis needs in scientific computing and data provenance.
                            </p>
                        </div>
                    </motion.div>

                    {/* The Dog Project */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70 border border-teal-900 rounded-xl shadow-lg hover:scale-[1.02] transition-all"
                    >
                        <div className="p-8 space-y-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-teal-400 text-2xl">🐶</span>
                                <span className="font-bold text-xl">The Dog Project</span>
                            </div>
                            <p className="text-gray-300">
                                A fun and educational pet project that uses The Dog API to let users explore and learn about different dog breeds. Designed as a lightweight web app to practice full-stack development concepts.
                            </p>
                            <p className="text-sm text-blue-300">
                                <b>Tech Stack:</b> Flask · Bootstrap · Redis
                            </p>
                            <p className="text-sm text-teal-300">
                                <b>Highlight:</b> Showcases integration of third-party APIs with a full-stack Python application and caching for optimized performance.
                            </p>
                        </div>
                    </motion.div>

                    {/* Author Identification of Source Code */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70 border border-purple-900 rounded-xl shadow-lg hover:scale-[1.02] transition-all"
                    >
                        <div className="p-8 space-y-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-purple-400 text-2xl">✍️</span>
                                <span className="font-bold text-xl">Author Identification of Source Code</span>
                            </div>
                            <p className="text-gray-300">
                                A research project focused on identifying individual authors from source code contributions in multi-author codebases. Developed a stacking ensemble classifier combining models such as Deep Neural Networks, Random Forests, and Support Vector Machines to improve accuracy in authorship attribution.
                            </p>
                            <p className="text-sm text-blue-300">
                                <b>Techniques Used:</b> Stacking Ensemble, DNN, SVM, Random Forest
                            </p>
                            <p className="text-sm text-blue-300">
                                <b>Research Output:</b> Published as a research paper.{' '}
                                <a href="#" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200">
                                    [link]
                                </a>
                            </p>
                            <p className="text-sm text-teal-300">
                                <b>Highlight:</b> Demonstrates advanced machine learning applied to real-world software forensics and intellectual property tracking.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}