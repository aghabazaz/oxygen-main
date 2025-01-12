import Footer from "@/components/Footer";
import TopMenu from "@/components/TopMenu";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Script from "next/script";
import GoogleAnalytics from "@/components/Analytics/google-analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oxygen",
  description: "Explore in the world",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  console.log(
    "%c locale",
    "background: #FFF; color: #000;padding: 0.25rem;border-radius: 5px",
    locale
  );
  return (
    <html
      lang={locale}
      className={`h-screen overflow-hidden ${locale === "fa" ? "font-Anjoman" : "ltr"}`}
      dir={locale === "fa" ? "rtl" : "ltr"}
    >
    <head>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-YWE2NEV3CT" />
    </head>
      <body className="font-helvetica overflow-y-scroll h-screen snap-y  scroll-smooth">
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5KVF8GKM"
                        height="0" width="0" className="hidden"></iframe></noscript>
      <NextIntlClientProvider messages={messages}>
          <TopMenu />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
