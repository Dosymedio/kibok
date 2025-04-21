import type { Metadata } from "next";
import { Urbanist} from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "@/components/footer";
import NextTopLoader from 'nextjs-toploader';


import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navbar";

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ki`bok",
  description: "Pagina ficticia para proyecto de negocios electronicos II",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${urbanist.variable} antialiased`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader
              color="#2299DD"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={true}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            />

        <Navbar/>
        {children}
        <Toaster />
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
