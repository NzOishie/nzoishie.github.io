'use client';

import { motion } from 'framer-motion';

const projects = [
	{
		label: 'Applied AI',
		labelClass: 'text-blue-300',
		borderClass: 'border-blue-900',
		title: 'AI-Powered Note-Taking App',
		summary:
			'A note-taking app that uses Google’s Gemini API to summarize meetings and extract action items from transcripts in real time.',
		stack: 'Gemini API, Streamlit, Python',
		highlight: 'Demonstrated at multiple conferences as a practical way to put an LLM inside a productivity tool.',
	},
	{
		label: 'Developer tools',
		labelClass: 'text-red-300',
		borderClass: 'border-red-900',
		title: 'Commit Checker',
		summary:
			'Detects commits that are likely to introduce bugs. A TypeScript VS Code extension flags risky commits in the editor, and a Python CLI runs the same checks in a terminal or CI pipeline.',
		stack: 'TypeScript, Python, scikit-learn, Git · Random Forest, Decision Tree, Logistic Regression',
		highlight: 'Surfaces commit-level risk before merge, in the editor and in automation.',
	},
	{
		label: 'Research',
		labelClass: 'text-purple-300',
		borderClass: 'border-purple-900',
		title: 'Author Identification of Source Code',
		summary:
			'Identifies individual authors inside multi-author codebases. A stacking ensemble combines deep neural networks, random forests, and support vector machines to improve authorship attribution.',
		stack: 'Stacking ensemble, DNN, SVM, Random Forest',
		highlight: 'Published as a research paper on machine learning for software forensics.',
	},
	{
		label: 'Visualization',
		labelClass: 'text-yellow-300',
		borderClass: 'border-yellow-900',
		title: 'VizProv',
		summary:
			'A web tool for exploring scientific workflow provenance. Interactive views let someone trace data lineage, follow execution dependencies, and inspect large workflow graphs.',
		stack: 'Vue.js, D3.js',
		highlight: 'Built for researchers who need to read how a scientific workflow actually ran.',
	},
];

export default function PersonalProjectsSection() {
	return (
		<section id="projects" className="relative px-4 py-24">
			<div className="relative z-10 mx-auto max-w-4xl">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-center text-3xl font-bold text-transparent drop-shadow-lg"
				>
					Projects
				</motion.h2>
				<p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
					Applied AI and developer tools, plus the visualization and research work behind them.
				</p>

				<div className="space-y-6">
					{projects.map((project) => (
						<motion.article
							key={project.title}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className={`rounded-xl border bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70 p-6 shadow-lg md:p-8 ${project.borderClass}`}
						>
							<p className={`text-xs font-medium uppercase tracking-wide ${project.labelClass}`}>{project.label}</p>
							<h3 className="mt-2 text-xl font-bold">{project.title}</h3>
							<p className="mt-3 text-gray-300">{project.summary}</p>
							<p className="mt-3 text-sm text-blue-300">
								<span className="font-semibold">Stack: </span>
								{project.stack}
							</p>
							<p className="mt-1 text-sm text-teal-300">{project.highlight}</p>
						</motion.article>
					))}

					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="rounded-xl border border-gray-800 bg-gray-900/40 px-6 py-4 text-sm text-gray-400"
					>
						<span className="font-medium text-gray-200">Also: The Dog Project. </span>
						A small Flask and Bootstrap app for browsing dog breeds through a public API, with Redis caching.
					</motion.div>
				</div>
			</div>
		</section>
	);
}
