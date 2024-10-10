import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Toaster } from "~/components/ui/sonner";
import { ThemeProvider } from "~/components/ui/theme-provider";

export const metadata: Metadata = {
  title: "Spammy",
  description: "AI-Powered Email Spam Classifier",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <main>{children}</main>
        </ThemeProvider>
      <Toaster />
      </body>
    </html>
  );
}
