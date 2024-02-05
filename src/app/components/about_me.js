import styles from '../components/about.me.module.css';


export default function AboutMe() {
  return (
    <section id="about" className={styles.sectionAbout}>
      <div className={styles.maxWidth}>
        <h2 className={styles.heading}>About Me</h2>
        <div className={styles.cardContainer}>
            <p className="mb-4">
                I am currently a Developer at <span className={styles.highlightText}>ExxonMobil</span>. At the same time, I am undertaking a part-time Master's in Software Engineering at <span className={styles.highlightText}>Italy</span>. You can download my CV from <a href="/CV.pdf" download className={styles.link}>here</a>.              
            </p>
            <p className="font-bold mb-2">Here are some technologies I have been working with:</p>
            <ul className={styles.technologyList}>
                <li className={styles.technologyItem}>Javascript ES6+</li>
                <li className={styles.technologyItem}>React.js</li>
                <li className={styles.technologyItem}>Python</li>
                <li className={styles.technologyItem}>Java</li>
                <li className={styles.technologyItem}>HTML & CSS</li>
            </ul>
        </div>
      </div>
    </section>
  );
}