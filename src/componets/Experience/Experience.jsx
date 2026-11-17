import skills from '../../data/skills.json';
import history from '../../data/history.json';
import { getImageUrl } from '../../utils';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section className={styles.container} id="experience" aria-labelledby="experience-title">
      <h2 className={styles.title} id="experience-title">Experience</h2>
      <ul className={styles.history}>
        {history.map(({ organisation, team, role, startDate, endDate, experiences, imageSrc }) => (
          <li className={styles.historyItem} key={`${organisation}-${startDate}`}>
            <img src={getImageUrl(imageSrc)} alt="" loading="lazy" />
            <div className={styles.historyItemDetails}>
              <h3>{team ? `${organisation} · ${team}` : organisation}</h3>
              <p>{role} <span className={styles.dates}>{startDate} – {endDate}</span></p>
              <ul>
                {experiences.map((experience) => <li key={experience}>{experience}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.technologies}>
        <h3>Technologies</h3>
        <ul className={styles.skills}>
          {skills.map(({ title }) => <li key={title}>{title}</li>)}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
