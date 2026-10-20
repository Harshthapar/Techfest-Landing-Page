import type { Metadata } from "next";
import { Orbitron, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Techfest 2026 – Asia's Largest Science & Technology Festival | IIT Bombay",
  description:
    "Techfest, IIT Bombay's annual science and technology festival — the biggest tech fest in Asia. Register now for competitions, workshops, exhibitions, pronites & more. Dec 16–18, 2026.",
  keywords: ["Techfest", "IIT Bombay", "tech festival", "science festival", "robotics", "hackathon", "AI", "workshops"],
  authors: [{ name: "Techfest IIT Bombay" }],
  openGraph: {
    title: "Techfest 2026 – Asia's Largest Science & Technology Festival",
    description: "Join 175,000+ attendees at IIT Bombay's annual tech extravaganza. Dec 16–18, 2026.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#07090e] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
