import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Providers from "./providers";
import { NavbarSection } from "./components/ui/Navbar";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vallarasu Jayachandran | Full Stack Developer & AI Engineer",
  description: "Portfolio of Vallarasu Jayachandran, Full Stack Developer and Technical Lead specializing in React.js, Python, Flask, Node.js, and AI integrations (LLMs, RAG, LangChain, LangGraph).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body className={`${plusJakarta.className} antialiased`}>
        {/* Animated background blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#006bff]/10 blur-[100px] animate-float-slow-1" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-cyan-300/8 blur-[120px] animate-float-slow-2" />
        </div>
        <main className="text-foreground bg-transparent min-h-screen relative">
          <NavbarSection />
          <Providers>{children}</Providers>
          <Analytics />
        </main>
      </body>
    </html>
  );
}
