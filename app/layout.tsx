import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google"
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Dimscord",
  description: "Developed by Jay Patel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignOutUrl={"/"}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            font.className,
            "bg-white dark:bg-[#313338]"
          )}
        >
          <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="dismcord-theme"
          disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider >
  );
}