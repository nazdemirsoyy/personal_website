import styles from '../components/about.me.module.css';


export default function AboutMe() {
  return (
    <section id="about" className={styles.sectionAbout}>
      <div className={styles.maxWidth}>
        <h2 className={styles.heading}>About Me</h2>
        <div className={styles.cardContainer}>
            <p className="mb-4">
                I am a Data Science Master's student at <span className={styles.highlightText}>Georg-August-Universität</span> in Göttingen , with strong academic background in Computer Science from <span className={styles.highlightText}>Eotvos Lorand University</span>. With a strong background in Web and Mobile Development, I am now pursuing a Master’s in Data Science to deepen my interest in Artificial Intelligence. My goal is to integrate my passion for web and mobile technologies into the AI field. You can download my CV from <a href="/Naz CV.pdf" download className={styles.link}>here</a>.              
            </p>
            <p className="font-bold mb-2">Here are some technologies I have been working with:</p>
            <ul className={styles.technologyList}>
                <li className={styles.technologyItem}>Javascript ES6+</li>
                <li className={styles.technologyItem}>React/React Native</li>
                <li className={styles.technologyItem}>Python</li>
            </ul>
        </div>
      </div>
    </section>
  );
}
