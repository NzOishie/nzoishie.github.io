'use client';

import HeroSection from './components/HeroSection';
import ContactSection from './components/ContactSection';
import ExperienceSectionWithBox from './components/ExperienceSectionWithBox';
import VolunteerCommunitySection from './components/VolunteerCommunitySection';
import SpeakingHighlightsSection from './components/SpeakingHighlightsSection';
import PersonalProjectsSection from './components/PersonalProjectsSection';

const navLinks = [
	{ href: '#experience', label: 'Work' },
	{ href: '#projects', label: 'Projects' },
	{ href: '#community', label: 'Community' },
	{ href: '#speaking', label: 'Speaking' },
	{ href: '#contact', label: 'Contact' },
];

export default function FullStackPortfolio() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
			<header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-gray-950/80 backdrop-blur-md">
				<div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
					<a href="#top" className="shrink-0 text-sm font-semibold text-white">
						Naz Oishie
					</a>
					<nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
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
			<VolunteerCommunitySection />
			<SpeakingHighlightsSection />
			<ContactSection />
		</main>
	);
}
