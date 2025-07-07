import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { Anton, Geist } from "next/font/google";
// import AuthSessionProvider from "@/lib/AuthProvider";

const geists = Geist({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "CopyWins Manager",
  description: "A platform for sharing and discovering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${geists.variable} antialiased`}>
        {/* <AuthSessionProvider> */}
        <NextThemesProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="blue"
            initialPosition={0.08}
            crawlSpeed={200}
            height={2}
            showSpinner={false}
            crawl={true}
            easing="ease"
            speed={200}
            shadow="0 0 5px #2299DD,0 0 5px #2299DD"
          />
          {children}
          <Toaster position="bottom-center" />
        </NextThemesProvider>{" "}
        {/* </AuthSessionProvider> */}
      </body>
    </html>
  );
}
