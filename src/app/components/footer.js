import styles from '../components/footer.module.css';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>Built and designed by Naz Demirsoy</p>
        <p>All rights reserved. ©</p>
      </div>
      <div className={styles.links}>
        <a href="https://codepen.io/nazdemirsoy" className={styles.link} target="_blank" rel="noopener noreferrer">CodePen</a>
        <a href="https://www.linkedin.com/in/nazdemirsoy/" className={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/nazdemirsoyy" className={styles.link} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  );
}