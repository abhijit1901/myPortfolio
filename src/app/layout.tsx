import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { portfolioConfig } from "@/config/portfolio.config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolioConfig.seo.openGraph.url),
  title: {
    default: portfolioConfig.seo.openGraph.title,
    template: `%s - ${portfolioConfig.title}`,
  },
  description: portfolioConfig.description,
  keywords: portfolioConfig.seo.keywords,
  authors: portfolioConfig.seo.authors,
  creator: `${portfolioConfig.name} (${portfolioConfig.seo.instagramHandle})`,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioConfig.seo.openGraph.url,
    title: portfolioConfig.seo.openGraph.title,
    description: portfolioConfig.seo.openGraph.description,
    images: [portfolioConfig.seo.openGraph.ogImage],
    siteName: portfolioConfig.seo.openGraph.siteName,
  },
  icons: {
    icon: portfolioConfig.seo.metadata.favicon,
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${rubik.variable}`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeSwitcher />
          <main
            className={cn(
              "flex relative break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 max-sm:pt-20",
              // Light mode: dotted background
              "bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]",
              // Dark mode: enhanced gradient background without dots
              "dark:bg-none dark:before:absolute dark:before:inset-0 dark:before:z-[-1]",
              "dark:before:bg-gradient-to-br dark:before:from-slate-900/95 dark:before:via-slate-800/90 dark:before:to-slate-900/95",
              "dark:after:absolute dark:after:inset-0 dark:after:z-[-1]",
              "dark:after:bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.05)_0%,transparent_25%),radial-gradient(circle_at_80%_80%,rgba(15,23,42,0.1)_0%,transparent_30%),radial-gradient(circle_at_50%_50%,rgba(30,41,59,0.08)_0%,transparent_40%)]"
            )}
          >
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}