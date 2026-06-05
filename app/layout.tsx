// app/layout.tsx

import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTopIndicator from "@/components/ScrollToTopIndicator";
import ThemeToggle from "@/components/ThemeToggle";
import MetaPixelPageView from "@/components/MetaPixelPageView";
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
        {/* ================================ */}
        {/* Google Analytics */}
        {/* ================================ */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-32STF55K2S"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', 'G-32STF55K2S');
          `}
        </Script>

        {/* ================================ */}
        {/* Meta Pixel */}
        {/* Pixel ID: 1038702055150907 */}
        {/* ================================ */}

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {
              if(f.fbq)return;

              n=f.fbq=function()
              {
                n.callMethod
                  ? n.callMethod.apply(n,arguments)
                  : n.queue.push(arguments)
              };

              if(!f._fbq)f._fbq=n;

              n.push=n;
              n.loaded=!0;
              n.version='2.0';
              n.queue=[];

              t=b.createElement(e);
              t.async=!0;
              t.src=v;

              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }
            (
              window,
              document,
              'script',
              'https://connect.facebook.net/en_US/fbevents.js'
            );

            fbq('init', '1038702055150907');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1038702055150907&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Suspense fallback={null}>
          <MetaPixelPageView />
        </Suspense>

        {/* ================================ */}
        {/* Existing Components */}
        {/* ================================ */}

        <CustomCursor />
        <ScrollToTopIndicator />
        <ThemeToggle />

        {children}
      </body>
    </html>
  );
}