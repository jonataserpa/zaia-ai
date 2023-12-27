import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Chat AI",
  description: "Zaia",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "android-launchericon-72-72.png",
        href: "android-launchericon-72-72.png",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
