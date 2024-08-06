import { Roboto } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import {SessionProvider} from "next-auth/react"; //session data for the app - included in layout so it can be used throughout the program
import { Header } from "@/components/nav";
import { cn } from "@/lib/utils";
const inter = Roboto({ weight:["300", "400", "500","900"], subsets: ["latin"]});

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
        <p className="text-xl font-bold">
          &#169;2024 - CyberSecurTA
        </p>
        <p className="w-2/5 mt-4">
          Cyber SecurTA connects cybersecurity students with teaching opportunities, enhancing education nationwide.
          Funded by NSF grant #2054724 and Microsoft ACCCE grant #2021080009
        </p> </div>
        <div className="md:w-1/2 sm:w-full text-right">&#169;2024 - CyberSecurTA </div>
        </div>
        
        </footer>
        </body>
    </html>
  );
}
