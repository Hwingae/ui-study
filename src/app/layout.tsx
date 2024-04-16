import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Gnb from "@/app/gnb";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UI practice",
  description: "Hello Next.JS",
};

const Layout = ({children}: {children: React.ReactNode}) => {
  return(
      <html lang={"ko"}>
        <body>
         <Gnb/>
          <main>{children}</main>
        </body>
      </html>
  )
}

export default Layout