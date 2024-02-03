import styles from '../components/header.module.css';


export default function Header() {
    return (
        <header className={styles.header}>
          <nav className={styles.navbar}>
            {/* <a href="/" className={styles.brand}>Naz Demirsoy</a> */
            <a href="#about" className={styles.navItem}>About</a>}
            <a href="#experience" className={styles.navItem}>Experience</a>
            <a href="#projects" className={styles.navItem}>Projects</a>
          </nav>
        </header>
      );
    }