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
		'Software engineer with 4.5+ years on Siemens Solido Design Environment: netlisting, data visualization, an API server, and MCP servers for an agent harness.',
	keywords: [
		'Naz Oishie',
		'Software Engineer',
		'Python',
		'C++',
		'Applied AI',
		'Agentic AI',
		'Machine Learning',
		'Siemens',
		'Solido Design Environment',
		'MCP',
		'Backend Development',
		'Data Processing',
		'API Development',
		'Web Development',
		'Electronic Design Automation',
	],
	authors: [{ name: 'Naz Oishie' }],
	creator: 'Naz Oishie',
	openGraph: {
		title: 'Naz Oishie - Software Engineer Portfolio',
		description:
			'Software engineer with 4.5+ years on Siemens Solido Design Environment: netlisting, data visualization, an API server, and MCP servers for an agent harness.',
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
			'Software engineer with 4.5+ years on Siemens Solido Design Environment: netlisting, data visualization, an API server, and MCP servers for an agent harness.',
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
		<html lang="en" className="scroll-smooth">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
