'use client';

import { motion } from 'framer-motion';

export default function EducationSection() {
	return (
		<section id="education" className="relative px-4 py-20">
			<div className="relative z-10 mx-auto max-w-4xl">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-center text-3xl font-bold text-transparent drop-shadow-lg"
				>
					Education
				</motion.h2>

				<div className="space-y-6">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.45 }}
						className="rounded-xl border border-blue-900 bg-gray-900/60 p-6 shadow-lg transition-all hover:border-blue-400"
					>
						<p className="text-sm font-medium text-blue-300">Master&apos;s in Computer Science</p>
						<h3 className="mt-1 text-xl font-semibold text-blue-400">
							University of Saskatchewan <span className="font-normal text-gray-400">· Saskatoon, Canada</span>
						</h3>
						<p className="mt-2 text-base text-gray-300">Acquired 90% marks. Thesis-based master&apos;s.</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.45, delay: 0.05 }}
						className="rounded-xl border border-purple-900 bg-gray-900/60 p-6 shadow-lg transition-all hover:border-purple-400"
					>
						<p className="text-sm font-medium text-purple-300">Bachelor&apos;s in Computer Science and Engineering</p>
						<h3 className="mt-1 text-xl font-semibold text-purple-400">
							Khulna University <span className="font-normal text-gray-400">· Khulna, Bangladesh</span>
						</h3>
						<p className="mt-2 text-base text-gray-300">Placed 2nd. CGPA of 3.82/4.00, with Distinction.</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
