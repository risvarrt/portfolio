import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rishi varman R T | Portfolio",
  description: "Rishi varman R T Software Developer with 3 years of experience.",
  verification: {
    google: process.env.GOOGLE_SEARCH_CONSOLE_TOKEN
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className="!scroll-smooth">
      <head>
        <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-TJ8ZYFH1K9"
        ></Script>
        <Script id="google-analytics">
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-TJ8ZYFH1K9');
              `}
        </Script>
      </head>
      <body
  className={`${inter.className} bg-slate-50 text-zinc-900 relative pt-20 sm:pt-30
              dark:bg-zinc-950 dark:text-zinc-50 dark:text-opacity-90`}
>
  {/* Blob 1 (right) */}
  <div
    className="bg-cyan-100 absolute top-[-6rem] -z-10 right-[11rem]
               h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
               sm:w-[68.75rem] dark:bg-cyan-800/40"
  />

  {/* Blob 2 (left) */}
  <div
    className="bg-rose-100 absolute top-[-1rem] -z-10 left-[-35rem]
               h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
               sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]
               xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-rose-800/40"
  />
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header/>
          {children}
          <Footer/>

          <Toaster position="bottom-center"/>
          <ThemeSwitch/>
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
      </body>
      </html>
  );
}
