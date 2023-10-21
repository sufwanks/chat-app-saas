import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientProvider from "@/components/providers/ClientProvider";

export const metadata: Metadata = {
  title: "SaaS-ChatApplication",
  description: "COMPLETE SaaS Platform with Stripe Payments & Next.js 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProvider>
      <html lang="en">
        <body className="flex flex-col min-h-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClientProvider>
  );
}
