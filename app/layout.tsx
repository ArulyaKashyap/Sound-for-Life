import type { Metadata } from "next";
import "./globals.css";
import GlobalTopBar from "../components/GlobalTopBar";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import StickyBottomCTA from "../components/StickyBottomCTA";

export const metadata: Metadata = {
  title: "Sound for Life",
  description: "Hearing care by Sound for Life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalTopBar />
        <MainHeader />
        {children}
        <Footer />
        <StickyBottomCTA />
      </body>
    </html>
  );
}