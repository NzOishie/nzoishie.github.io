import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Naz Oishie - Software Engineer',
	description:
		'Welcome to my portfolio! I am a passionate software engineer with 3+ years of experience building Electronic Design Automation tools using Python, SKILL, and C++ at Siemens. Explore my projects and contributions to the tech community.',
	keywords: [
		'Naz Oishie',
		'Software Engineer',
		'Frontend Development',
		'Backend Development',
		'Python',
		'C++',
		'Cadence',
		'Skill',
		'Electronic Design Automation',
		'Siemens',
		'Database Design',
		'API Development',
		'DevOps',
		'System Architecture',
		'Web Development',
	],
	authors: [{ name: 'Naz Oishie' }],
	creator: 'Naz Oishie',
	openGraph: {
		title: 'Naz Oishie - Software Engineer Portfolio',
		description:
			'Experienced Software Engineer specializing in Electronic Design Automation, building impactful tools with Python, SKILL, and C++. Explore my journey, innovative projects, and community contributions.',
		url: 'https://nzoishie.dev',
		siteName: 'Naz Oishie - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Naz Oishie - Software Engineer Portfolio',
			},
		],
		locale: 'en_CA',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Naz Oishie - Software Engineer Portfolio',
		description:
			' Experienced Software Engineer specializing in Electronic Design Automation, building impactful tools with Python, SKILL, and C++. Explore my journey, innovative projects, and community contributions.',
		creator: '@nzoishie',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
