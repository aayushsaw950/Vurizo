import { League_Spartan, Inter } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({ 
  subsets: ["latin"],
  variable: "--font-league", // CSS variable banaya
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});

export const  Metadata = {
  title: "Vurizo | AI Automation Agency",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  description: "Scaling businesses with custom AI Agents, LangChain workflows, and intelligent automation.",
  keywords: ["AI Automation", "LangChain", "MERN Stack", "Business AI", "Vurizo"],
  openGraph: {
    title: "Vurizo | AI Automation Agency",
    description: "Future-proof your business with autonomous AI workers.",
    url: "https://vurizo.in", // Your new domain
    siteName: "Vurizo",
    images: [{ url: "/og-image.png" }], // Create this later for social sharing
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.variable} ${inter.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
