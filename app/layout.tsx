import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import Analytics from "@/components/Analytics";
import { withBasePath } from "@/lib/paths";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FABapp – Lern-App für Fachangestellte für Bäderbetriebe",
  description:
    "Deine Lern-App für den Beruf Fachangestellte für Bäderbetriebe. Bereite dich mit Fragenkatalogen ideal auf die Abschlussprüfung vor.",
  icons: {
    icon: withBasePath("/images/icon-source.png"),
    apple: withBasePath("/images/apple-touch-icon.png"),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-blue-light text-navy">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsentBanner />
        <Analytics />
      </body>
    </html>
  );
}
