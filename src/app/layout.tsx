import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";
import { Open_Sans } from "next/font/google";
import { Nanum_Gothic } from "next/font/google";

const sans = Open_Sans({ subsets: ["latin"] });
const gothic = Nanum_Gothic({ subsets: ["latin"], weight: "700" });
export const metadata = {
  title: "넥스트사이트",
  description: "넥스트사이트입니다!",
  icons: {
    // icon: "/favicon.ico", 지금은 자동으로 되는듯?
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body>
        <header className={styles.header}>
          <h1 className={gothic.className}>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href="products">Products</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
