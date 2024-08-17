import type { Metadata } from "next";
// import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "@/assets/css/common/reset.css"
import "@/assets/css/common/fonts.css"
import "@/assets/css/common/globals.css";

import PageTransition from "@/lib/animation/PageTransition";
import StairTransition from "@/lib/animation/StairTransition";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";


// const inter = Inter({ subsets: ["latin"] });
// const JetBrainsMono = JetBrains_Mono({ 
//   subsets: ["latin"], 
//   weight: ["100", "200", "300", "400", "500", "600" ,"700", "800"],
//   variable: '--font-jetbrainsMono'
// });

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});



export const metadata: Metadata = {
  title: "하지만 다 했죠?",
  description: "하지만 다 했죠?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <div id="wrap">
          <Header />
          <main id="contents">
            <StairTransition />
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
