import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.left}>
        © 2026 Luyolo Stofile — Building in public
      </span>
      <div className={styles.right}>
        <a
          href="https://www.linkedin.com/in/luyolostofile/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.extLink}
        >
          LinkedIn ↗
        </a>
        <a
          href="https://github.com/STOF14"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.extLink}
        >
          GitHub ↗
        </a>
      </div>
    </footer>
  );
}
