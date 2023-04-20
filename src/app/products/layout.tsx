import Link from "next/link";
import styles from "./layout.module.css";

export const metadata = {
  title: "Product사이트",
  description: "product사이트입니다!",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/men">남성옷</Link>
        <Link href="/products/women">여성옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
