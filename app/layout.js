import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ahmad Abdallah Khamis | Computer Science Student",
  description:
    "Personal portfolio of Ahmad Abdallah Khamis, a Computer Science student at the State University of Zanzibar, focused on web development and system development.",
  keywords: [
    "Ahmad Abdallah Khamis",
    "Computer Science",
    "Web Developer",
    "Next.js Developer",
    "PHP Developer",
    "State University of Zanzibar",
    "SUZA",
    "Lost ID and Document Recovery System",
  ],
  authors: [
    {
      name: "Ahmad Abdallah Khamis",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}