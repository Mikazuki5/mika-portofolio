import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header.component";
import Footer from "@/components/Layout/Footer.component";
import { ThemeProvider } from "@/components/Themes/ThemesProvider.component";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio | Gamal Rivaldi",
  description: "Generated by create next app",
  icons: { icon: '/fav-icons/icon-dark.png'}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
