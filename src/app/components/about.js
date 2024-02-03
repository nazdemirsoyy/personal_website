import styles from '../components/about.module.css';

function About() {
    return (
      <header className={styles.container}>
        <h1 id={styles.name}>Naz Demirsoy</h1>
        <p className={styles.paragraph}>
          A fresh Computer Science graduate with a keen interest in full-stack development and a track record of hands-on experience in data solutions and server management.
        </p>
        {/* Contact */}
        <a href="mailto:nazdemirsoyy@gmail.com" className={styles.emailButton}>
          <span className={styles.icon}>&#x2709;</span> Say hi!
        </a>
      </header>
    );
  }
  
  export default About;
  