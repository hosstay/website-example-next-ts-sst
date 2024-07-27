import "website-example-next-ts-sst/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { ReactThemeProvider } from "../theme/react"

import { Header } from "website-example-next-ts-sst/app/_components/Header";

export const metadata: Metadata = {
  title: "Responsive Example App",
  description: "A simple example app for a responsive portfolio website.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`} suppressHydrationWarning>
      <body>
        <ReactThemeProvider>
          <div className="bg-white text-gray-800 dark:bg-black dark:text-gray-400/70">
            <Header />
            {children}
          </div>
        </ReactThemeProvider>
      </body>
    </html>
  );
}
