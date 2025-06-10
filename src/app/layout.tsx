import type { Metadata } from "next";
import { DM_Sans, Orbitron } from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge";
// import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });
const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: '--font-orbitron',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "MultiChat - AI-Powered Social Media Automation",
  description: "Automate your social media interactions with MultiChat's AI-powered platform",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  keywords: ["social media", "automation", "AI", "chatbot", "marketing", "social media management"],
  authors: [{ name: "MultiChat Team" }],
  creator: "MultiChat",
  publisher: "MultiChat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://multichat-ai.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "MultiChat - AI-Powered Social Media Automation",
    description: "Automate your social media interactions with MultiChat's AI-powered platform",
    url: 'https://multichat-ai.vercel.app',
    siteName: 'MultiChat',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MultiChat - AI-Powered Social Media Automation",
    description: "Automate your social media interactions with MultiChat's AI-powered platform",
    creator: '@multichat',
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
    <html lang="en" className={`relative ${orbitron.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
