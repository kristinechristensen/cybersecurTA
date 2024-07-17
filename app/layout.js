import { Roboto } from "next/font/google";
import "./globals.css";
import {SessionProvider} from "next-auth/react"; //session data for the app - included in layout so it can be used throughout the program

const inter = Roboto({ weight:["300", "400", "500","900"], subsets: ["latin"] });

export const metadata = {
  title: "CyberSecurTA",
  description: "Hacking the Gap and Building the Future Workforce!",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <SessionProvider session={session}> 
        <body className={inter.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}
