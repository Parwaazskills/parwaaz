// app/layout.tsx

import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTopIndicator from "@/components/ScrollToTopIndicator";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Parwaaz",
  description: "Parwaaz landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat.variable}`}>
        <CustomCursor />
        <ScrollToTopIndicator />
        {children}
      </body>
    </html>
  );
}