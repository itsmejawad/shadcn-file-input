import type { Metadata } from "next";
import localFont from "next/font/local";

// Components
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Main } from "@/components/main";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "File Input - shadcn/ui",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background  font-[family-name:var(--font-geist-sans)]`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <section className="grid grid-cols-[auto_1fr] max-w-screen-xl mx-auto gap-x-2  h-[calc(100dvh-69px)] bg-background">
            <Sidebar variant="Desktop" />
            <Main>{children}</Main>
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
