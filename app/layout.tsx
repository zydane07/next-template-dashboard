import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { cn } from "@/helper/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ivenna Dashboard",
  description: "Triple A Inventory (Infomedia)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDevelopment = process.env.NODE_ENV === "development";
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-default-50 dark:bg-black-400",
          isDevelopment && "debug-screens",
        )}
      >
        <Providers>
          {children}
          {/* <Toaster richColors /> */}
        </Providers>
      </body>
    </html>
  );
}
