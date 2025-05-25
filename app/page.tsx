'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import ExperienceSectionWithBox from './components/ExperienceSectionWithBox';
import VolunteerCommunitySection from './components/VolunteerCommunitySection';
import SpeakingHighlightsSection from './components/SpeakingHighlightsSection';
import PersonalProjectsSection from './components/PersonalProjectsSection';

export default function FullStackPortfolio() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
			<HeroSection />
			<ExperienceSectionWithBox />
			<PersonalProjectsSection />
			<VolunteerCommunitySection />
			<SpeakingHighlightsSection />
			<ContactSection />
		</main>
	);
}
