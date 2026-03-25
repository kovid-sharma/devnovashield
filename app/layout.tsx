import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dev.nova — Product & idea development",
  description:
    "A NovaShield child studio for development products, MVPs, and idea building — from discovery to shipped software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-[#0a0e27] font-sans antialiased text-white",
          outfit.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
