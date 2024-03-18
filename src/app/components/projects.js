import styles from '../components/projects.module.css';

const projects = [
    {
      name: "PixelRatings",
      languages: ["React Native", "Firebase"],
      description: "A Game Rating Mobile Application.",
      link: "PixelRatings Documentation.pdf"
    }, 
    {
        name: "Tatooine",
        languages: ["JavaScript"],
        description: "Spearheaded the design and development of a 2D real-time city builder game along the lines of the classic SimCity, as part of a collaborative team effort.",
        link: "Tatooine - User Documentation.pdf"
      },
];

export default function Projects() {
    return (
      <section id="projects" className={styles.sectionProjects}>
      <div className={styles.maxWidth}>
        <h2 className={styles.heading}>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.projectHeader}>
              <h3 className={styles.projectTitle}>{project.name}</h3>
              <div className={styles.projectLanguages}>
                    {Array.isArray(project.languages) ? project.languages.map((language, langIndex) => (
                  <span key={langIndex} className={styles.projectLanguage}>{language}</span>
                )) : <span className={styles.projectLanguage}>{project.languages}</span>}
              </div>
            </div>
            <p className={styles.projectDescription}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>View Project</a>
          </div>
        ))}
        </div>
      </section>
    );
  }