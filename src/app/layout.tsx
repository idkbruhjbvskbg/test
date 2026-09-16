import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vivyn Bhavani Raaman - Mechanical & Aerospace Engineer",
  description: "Professional portfolio of Vivyn Bhavani Raaman, a Mechanical/Aerospace Engineering student specializing in propulsion systems, wind tunnel testing, and innovative engine design.",
  keywords: ["Mechanical Engineering", "Aerospace Engineering", "Propulsion Systems", "Wind Tunnel Testing",  "Formula SAE", "VAWT"],
  authors: [{ name: "Vivyn Bhavani Raaman" }],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Vivyn Bhavani Raaman - Mechanical & Aerospace Engineer",
    description: "Professional portfolio showcasing expertise in mechanical and aerospace engineering, propulsion systems, and innovative design.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivyn Bhavani Raaman - Mechanical & Aerospace Engineer",
    description: "Professional portfolio showcasing expertise in mechanical and aerospace engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark smooth-scroll">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <Navigation />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
