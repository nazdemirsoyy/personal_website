import styles from '../components/experiences.module.css';

const experiences = [
    {
        company: "ExxonMobil Hungary",
        role: "OutSystems & Web Developer",
        date: "OCT 2023 - SEP 2024",
        points: [
          "• Lead the development of an internal product using the OutSystems platform.",
          "• Integrated emerging business requirements to optimize product functionality.",
          "• Actively engaged with end-users to collate feedback, driving continuous product improvements based on their insights.",
          "• Strategically planned and prioritized product releases to align with organizational goals and user demands.",
          "• Building Web Applications using HTML, CSS and JavaScript."
        ],
      },
      {
        company: "ExxonMobil Hungary",
        role: "Enterprise Content Managament Analyst",
        date: "JUN 2022 - OCT 2023",
        points: [
          "• Acquired hands-on experience managing vast amounts of data.",
          "• Deepened knowledge in server-side operations and functionalities.",
          "• Oversaw server monitoring and maintenance to guarantee peak performance.",
          "• Leveraged development expertise to craft an automation tool, enhancing server monitoring efficiency by 80%.",
          "• Worked as a ServiceNow Developer, usage of ServiceNow ticketing system as daily basis"
        ],
      },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.sectionExperience}>
      <div className={styles.maxWidth}>
        <h2 className={styles.heading}>Experiences</h2>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.cardContainer}>
            <h3 className={styles.role}>{exp.role}  @ <span className={styles.companyName}>{exp.company}</span></h3>
            <p className={styles.date}>{exp.date}</p>
            <ul className={styles.responsibilities}>
              {exp.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
