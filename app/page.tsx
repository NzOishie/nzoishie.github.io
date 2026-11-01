'use client';

import HeroSection from './components/HeroSection';
import ContactSection from './components/ContactSection';
import ExperienceSectionWithBox from './components/ExperienceSectionWithBox';
import EducationSection from './components/EducationSection';
import VolunteerCommunitySection from './components/VolunteerCommunitySection';
import SpeakingHighlightsSection from './components/SpeakingHighlightsSection';
import PersonalProjectsSection from './components/PersonalProjectsSection';

const navLinks = [
	{ href: '#experience', label: 'Work' },
	{ href: '#projects', label: 'Projects' },
	{ href: '#education', label: 'Education' },
	{ href: '#community', label: 'Community' },
	{ href: '#speaking', label: 'Speaking' },
	{ href: '#contact', label: 'Contact' },
];

export default function FullStackPortfolio() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
			<header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-gray-950/80 backdrop-blur-md">
				<div className="mx-auto flex max-w-5xl flex-col gap-2 px-3 py-3 min-[450px]:px-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
					<a href="#top" className="hidden min-[450px]:inline shrink-0 text-sm font-semibold text-white">
						Naz Oishie
					</a>
					<nav className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-400 min-[360px]:flex-nowrap min-[360px]:justify-between min-[360px]:gap-x-0 min-[360px]:text-[13px] min-[450px]:flex-wrap min-[450px]:justify-start min-[450px]:gap-x-4 min-[450px]:text-sm">
						{navLinks.map((link) => (
							<a key={link.href} href={link.href} className="whitespace-nowrap transition-colors hover:text-white">
								{link.label}
							</a>
						))}
					</nav>
				</div>
			</header>
			<HeroSection />
			<ExperienceSectionWithBox />
			<PersonalProjectsSection />
			<EducationSection />
			<VolunteerCommunitySection />
			<SpeakingHighlightsSection />
			<ContactSection />
		</main>
	);
}
