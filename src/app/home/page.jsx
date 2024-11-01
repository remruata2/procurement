import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Procurement</h1>
      <nav className={styles.nav}>
        <Link href="/projects" className={styles.link}>
          Projects
        </Link>
        <Link href="/vendors" className={styles.link}>
          Vendors
        </Link>
        <Link href="/orders" className={styles.link}>
          Purchase Orders
        </Link>
      </nav>
    </div>
  );
}
