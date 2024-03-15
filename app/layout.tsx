import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientProvider from "@/components/providers/ClientProvider";
import FirebaseAuthProvider from "@/components/FirebaseAuthProvider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "SaaS-ChatApplication",
  description: "COMPLETE SaaS Platform with Shad cn & Next.js 13",
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
          <FirebaseAuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}

              <Toaster />
            </ThemeProvider>
          </FirebaseAuthProvider>
        </body>
      </html>
    </ClientProvider>
  );
}
