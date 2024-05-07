import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Belle Nippe",
  description: "Belle Nippe - Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ClerkProvider>
          <div className="fixed top-0 z-30 w-full flex justify-center">
            <Navbar />
          </div>{" "}
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
