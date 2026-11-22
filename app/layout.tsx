import SmoothScroll from "@/components/animations/SmoothScroll";





import type { Metadata } from "next";
import {
  Bebas_Neue,
  DM_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const displayFont = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubham Reddy | Web Developer",
  description:
    "I'm Shubham Reddy, a web developer and creative problem solver building modern digital experiences.",
  metadataBase: new URL("https://shubhamreddy.in"),
  openGraph: {
    title: "Shubham Reddy | Web Developer",
    description:
      "A developer's story. Explore my projects, journey and creative work.",
    url: "https://shubhamreddy.in",
    siteName: "Shubham Reddy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<body
  className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
>
  <SmoothScroll />
  {children}
</body>
    </html>
  );
}
