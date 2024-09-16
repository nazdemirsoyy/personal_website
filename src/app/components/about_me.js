import styles from '../components/about.me.module.css';


export default function AboutMe() {
  return (
    <section id="about" className={styles.sectionAbout}>
      <div className={styles.maxWidth}>
        <h2 className={styles.heading}>About Me</h2>
        <div className={styles.cardContainer}>
            <p className="mb-4">
                I am currently a masters student at <span className={styles.highlightText}>Georg-August-Universität</span> in Göttingen , with a solid academic background from <span className={styles.highlightText}>Eotvos Lorand University</span> where I specialized in web development, data science, and AI. My journey includes numerous certifications and a dedication to practical applications, as evidenced by my work on enhancing server efficiency through automation tools. You can download my CV from <a href="/Naz CV(1).pdf" download className={styles.link}>here</a>.              
            </p>
            <p className="font-bold mb-2">Here are some technologies I have been working with:</p>
            <ul className={styles.technologyList}>
                <li className={styles.technologyItem}>Javascript ES6+</li>
                <li className={styles.technologyItem}>React/React Native</li>
                <li className={styles.technologyItem}>Python</li>
                <li className={styles.technologyItem}>Java</li>
                <li className={styles.technologyItem}>HTML & CSS</li>
            </ul>
        </div>
      </div>
    </section>
  );
}
