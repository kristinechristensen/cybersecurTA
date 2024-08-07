import { Roboto } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import {SessionProvider} from "next-auth/react"; //session data for the app - included in layout so it can be used throughout the program
import { Header } from "@/components/nav";
import { cn } from "@/lib/utils";
const inter = Roboto({ weight:["300", "400", "500","900"], subsets: ["latin"]});
import Image from "next/image";

export const metadata = {
  title: "CyberSecurTA",
  description: "Hacking the Gap and Building the Future Workforce!",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en"> 
        <body className={cn(inter.className, styles.body1)}>
        <SessionProvider session={session}> 
          <Header></Header>
          {children}
        </SessionProvider>
        <footer className={styles.footer}>
          <div className="flex flex-wrap w-full px-8">
        <div className="md:w-1/2 sm:w-full">
        <p className="text-xl font-semibold">
          &#169;2024 - CyberSecurTA
        </p>
        <p className="w-1/2 mt-4 sm:w-full">
        <Image src="/assets/nsf.png" width="125" height="125" align="left" alt="CybersecurTA" className="mr-8 drop-shadow-lg" />CyberSecurTA connects cybersecurity students with teaching opportunities, enhancing education nationwide.
          Funded by NSF grant #2054724 and Microsoft ACCCE grant #2021080009
        </p> </div>
        <div className="md:w-1/2 sm:w-full text-right">
        <Image src="/assets/inverseLogo.svg" width="125" height="125" align="right" alt="CybersecurTA" className="mr-8 drop-shadow-lg" /> </div>
        </div>
        
        </footer>
        </body>
    </html>
  );
}
