'use client';

import { motion } from 'framer-motion';

const focuses = [
	{
		title: 'Software engineering',
		titleClass: 'text-blue-400',
		dotClass: 'bg-blue-500',
		cardClass: 'hover:border-blue-500/40',
		items: ['Python and C++ applications', 'API design and servers', 'Performance and algorithm design'],
	},
	{
		title: 'Applied AI',
		titleClass: 'text-purple-400',
		dotClass: 'bg-purple-500',
		cardClass: 'hover:border-purple-500/40',
		items: ['LLM apps with the Gemini API', 'Agentic AI', 'Research in intelligent software systems'],
	},
	{
		title: 'How I work',
		titleClass: 'text-teal-400',
		dotClass: 'bg-teal-500',
		cardClass: 'hover:border-teal-500/40',
		items: ['Mentoring newly hired developers at Siemens', 'Code review and knowledge sharing', 'Cross-team work with QA, UX, and DevOps'],
	},
];

export default function HeroSection() {
	return (
		<section id="top" className="relative min-h-screen overflow-hidden pt-20">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
			</div>

			<div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-16">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-center md:mb-12">
					<div className="mb-6 flex flex-col items-center justify-center gap-6 md:mb-8 md:flex-row md:gap-10">
						<div className="flex flex-shrink-0 justify-center">
							<img
								src="/nzoishie.jpg"
								alt="Naz Oishie headshot"
								className="h-28 w-28 rounded-full border-4 border-blue-400 object-cover shadow-lg md:h-40 md:w-40"
							/>
						</div>
						<div className="text-center md:text-left">
							<h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
								Naz Oishie
							</h1>
							<h2 className="mt-2 text-2xl font-bold text-white md:text-4xl">Software Engineer</h2>
							<p className="mt-2 text-sm text-gray-400 md:text-base">She/ Her</p>
							<p className="mt-1 text-sm text-gray-500 md:text-base">Vancouver, BC</p>
						</div>
					</div>
					<p className="mx-auto max-w-2xl text-lg text-gray-400 md:text-xl">
						I build software in Python and C++ at{' '}
						<a
							href="https://eda.sw.siemens.com/en-US/"
							className="text-blue-400 underline transition hover:text-blue-300"
							target="_blank"
							rel="noopener noreferrer"
						>
							Siemens
						</a>{' '}
						for{' '}
						<a
							href="https://www.siemens.com/en-us/products/ic/solido/design-environment/"
							className="text-blue-400 underline transition hover:text-blue-300"
							target="_blank"
							rel="noopener noreferrer"
						>
							Solido Design Environment</a>{', '}
						with 4.5+ years creating tools that parse, process, and visualize large-scale circuit design data.
					</p>
					<p className="mx-auto mt-4 max-w-2xl text-base text-gray-500 md:text-lg">
						I also work on applied AI and agentic AI, including LLM-backed apps. I founded{' '}
						<a href="https://gdg.community.dev/gdg-saskatoon/" className="text-blue-400 transition hover:text-blue-300">
							Google Developer Groups Saskatoon
						</a>{' '}
						and mentor as a{' '}
						<a href="https://www.womentechmakers.com/" className="text-purple-400 transition hover:text-purple-300">
							Women Techmakers
						</a>{' '}
						Ambassador.
					</p>
					<div className="mt-6 flex flex-wrap justify-center gap-2 md:gap-3">
						<span className="rounded-full bg-purple-500/10 px-3 py-1.5 text-xs text-purple-400 md:px-4 md:py-2 md:text-sm">Python</span>
						<span className="rounded-full bg-teal-500/10 px-3 py-1.5 text-xs text-teal-400 md:px-4 md:py-2 md:text-sm">C++</span>
						<span className="rounded-full bg-blue-500/10 px-3 py-1.5 text-xs text-blue-400 md:px-4 md:py-2 md:text-sm">Applied AI</span>
						<span className="rounded-full bg-purple-500/10 px-3 py-1.5 text-xs text-purple-400 md:px-4 md:py-2 md:text-sm">Systems</span>
					</div>
				</motion.div>

				<div className="relative mx-auto w-full max-w-5xl px-2 md:px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="rounded-lg border border-gray-800 bg-gray-900/50 p-2 backdrop-blur-sm md:p-4"
					>
						<div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
							{focuses.map((focus) => (
								<div
									key={focus.title}
									className={`rounded-lg border-2 border-transparent bg-gray-800/50 p-3 transition-colors hover:bg-gray-800/80 md:p-4 ${focus.cardClass}`}
								>
									<h3 className={`mb-2 text-base font-semibold md:mb-3 md:text-lg ${focus.titleClass}`}>{focus.title}</h3>
									<ul className="space-y-1.5 text-xs text-gray-400 md:text-sm">
										{focus.items.map((item) => (
											<li key={item} className="flex items-center gap-2">
												<div className={`h-1 w-1 rounded-full ${focus.dotClass}`} />
												{item}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
