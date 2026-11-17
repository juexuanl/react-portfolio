import projects from '../../data/projects.json';
import lendingProjects from '../../data/lendingProjects.json';
import { getImageUrl } from '../../utils';
import styles from './Projects.module.css';
import cardStyles from './ProjectCard.module.css';

const projectGroups = [
  { id: 'lending-projects', title: 'Intuit Lending Platform', projects: lendingProjects, className: styles.lendingProjects },
  { id: 'more-projects', title: 'More Projects', projects, className: styles.projects },
];

const Projects = () => {
  return (
    <section className={styles.container} id="projects" aria-labelledby="projects-title">
      <h2 className={styles.title} id="projects-title">Featured Projects</h2>
      {projectGroups.map((group) => (
        <section className={styles.group} key={group.id} aria-labelledby={group.id}>
          <h3 className={styles.groupTitle} id={group.id}>{group.title}</h3>
          <div className={group.className}>
            {group.projects.map(({ title, year, endYear, imageSrc, description, skills, details }) => (
              <article className={cardStyles.container} key={title}>
                {imageSrc && (
                  <img src={getImageUrl(imageSrc)} alt="" loading="lazy" className={cardStyles.image} />
                )}
                <div className={cardStyles.content}>
                  <header className={cardStyles.heading}>
                    <h4 className={cardStyles.title}>{title}</h4>
                    {year && (
                      <span className={cardStyles.year}>
                        <time dateTime={year}>{year}</time>
                        {endYear && <>–<time dateTime={endYear}>{endYear}</time></>}
                      </span>
                    )}
                  </header>
                  <p className={cardStyles.description}>{description}</p>
                  <ul className={cardStyles.skills} aria-label="Technologies">
                    {skills.map((skill) => <li className={cardStyles.skill} key={skill}>{skill}</li>)}
                  </ul>
                  {details?.length > 0 && (
                    <details className={cardStyles.details}>
                      <summary>Project details<span className="visually-hidden"> for {title}</span></summary>
                      <ul>
                        {details.map((detail) => <li key={detail}>{detail}</li>)}
                      </ul>
                    </details>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
};

export default Projects;
