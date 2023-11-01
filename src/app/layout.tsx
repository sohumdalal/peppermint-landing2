import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { Inter } from "next/font/google";

import Header from "../components/Header.js";
import Footer from "../components/Footer.tsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PepperMint Landing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
