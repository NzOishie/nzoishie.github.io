'use client';

import { motion } from 'framer-motion';

export default function ExperienceSection() {
	return (
		<section id="experience" className="relative px-4 py-20">
			<div className="relative z-10 mx-auto max-w-4xl">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-center text-3xl font-bold text-transparent drop-shadow-lg"
				>
					Experience
				</motion.h2>

				<div className="space-y-6">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.45 }}
						className="rounded-xl border border-blue-900 bg-gray-900/60 p-6 shadow-lg transition-all hover:border-blue-400"
					>
						<p className="text-sm font-medium text-blue-300">Software Engineer</p>
						<h3 className="mt-1 text-xl font-semibold">
							<a
								href="https://www.siemens.com/en-us/products/ic/solido/design-environment/"
								className="text-blue-400 underline decoration-blue-400/40 transition hover:text-blue-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								Solido Design Environment
							</a>
						</h3>
						<p className="mt-1 text-sm text-gray-400">Siemens EDA · Vancouver, Canada</p>
						<p className="mb-4 mt-1 text-sm text-gray-400">May 2022 – Present</p>
						<ul className="list-disc list-inside space-y-2 text-base text-gray-300">
							<li>
								Develop high-performance tools for Electronic Design Automation using Python and C++, focusing on parsing, simulation, and visualization of large-scale circuit design data.
							</li>
							<li>Contributed to scalable architecture and core algorithm enhancements that improved performance and maintainability.</li>
							<li>Build netlisting and data visualization for Solido Design Environment in Python, C++, and Cadence SKILL.</li>
							<li>Write the API system and API server so users can use the product.</li>
							<li>Build Model Context Protocol (MCP) servers that expose those APIs to an agent harness.</li>
							<li>
								Mentor newly hired developers and interns on Solido Design Environment, from onboarding through the codebase, reviews, and day-to-day engineering practice.
							</li>
						</ul>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.45, delay: 0.05 }}
						className="rounded-xl border border-purple-900 bg-gray-900/60 p-6 shadow-lg transition-all hover:border-purple-400"
					>
						<p className="text-sm font-medium text-purple-300">Graduate Research & Teaching</p>
						<h3 className="mt-1 text-xl font-semibold text-purple-400">
							University of Saskatchewan <span className="font-normal text-gray-400">· Saskatoon, Canada</span>
						</h3>
						<p className="mb-4 mt-1 text-sm text-gray-400">Sep 2019 – Feb 2022</p>
						<ul className="list-disc list-inside space-y-2 text-base text-gray-300">
							<li>
								Researched AI and software engineering, including workflow visualization, release-note classification, and detection of bug-inducing commits.
							</li>
							<li>Built scraping and processing pipelines over software repositories and other large datasets.</li>
							<li>Taught and designed labs for Python, Java, web development, and databases, mentored students, and supported course delivery for both CS and Business faculties.</li>
						</ul>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.45, delay: 0.1 }}
						className="rounded-xl border border-gray-800 bg-gray-900/40 px-6 py-5"
					>
						<h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-gray-500">Earlier</h3>
						<ul className="space-y-4 text-sm text-gray-400">
							<li>
								<p>
									<span className="font-medium text-gray-200">Research Assistant, Wilfrid Laurier University</span>
									<span> · May 2021 – Jun 2021</span>
								</p>
								<p className="mt-1">Summer project analyzing large datasets for academic and business insights.</p>
							</li>
							<li>
								<p>
									<span className="font-medium text-gray-200">Lecturer, Leading University</span>
									<span> · Bangladesh · May 2019 – Aug 2019</span>
								</p>
								<p className="mt-1">Taught structured programming in C, object-oriented programming in Java, and operating systems.</p>
							</li>
							<li>
								<p>
									<span className="font-medium text-gray-200">Intern Engineer, W3Engineers Ltd.</span>
									<span> · Bangladesh · Jan 2019 – Apr 2019</span>
								</p>
								<p className="mt-1">Full-stack web projects with Flask, Vue.js, JavaScript, HTML, and CSS.</p>
							</li>
						</ul>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
