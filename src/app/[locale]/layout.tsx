import Footer from "@/components/Footer";
import TopMenu from "@/components/TopMenu";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

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
      dir={locale === "en" ? "ltr" : "rtl"}
    >
      <body className="font-helvetica overflow-y-scroll h-screen snap-y snap-mandatory scroll-smooth">
        <NextIntlClientProvider messages={messages}>
          <TopMenu />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
