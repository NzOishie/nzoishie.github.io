'use client';

import { motion } from 'framer-motion';

export default function VolunteerCommunitySection() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center text-blue-300"
                >
                    Volunteer & Community Roles
                </motion.h2>

                <div className="space-y-10">
                    {/* GDG Chapter Lead */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="bg-gray-900/40 border border-blue-900 rounded-lg p-6"
                    >
                        <h3 className="text-lg font-semibold text-blue-400">Chapter Lead</h3>
                        <p className="text-gray-400 text-sm mb-2">Google Developer Groups (GDG) Saskatoon &bull; 2023 – Present</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-300 text-base">
                            <li>Organize and host local tech events, meetups, and DevFests to foster a collaborative developer community.</li>
                            <li>Lead event planning, speaker coordination, and partnership outreach to bring the latest in tech to Saskatoon.</li>
                            <li>Mentor and support developers of all levels, creating an inclusive space for learning and growth.</li>
                        </ul>
                    </motion.div>

                    {/* Women Techmakers */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="bg-gray-900/40 border border-purple-900 rounded-lg p-6"
                    >
                        <h3 className="text-lg font-semibold text-purple-400">Community Member & Advocate</h3>
                        <p className="text-gray-400 text-sm mb-2">Women Techmakers (WTM) &bull; Ongoing</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-300 text-base">
                            <li>Actively support and participate in initiatives that empower women in technology.</li>
                            <li>Share insights through talks and panels to inspire and uplift underrepresented voices in tech.</li>
                            <li>Collaborate with global WTM efforts to promote diversity, equity, and inclusion in the industry.</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}