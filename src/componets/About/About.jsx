import { getImageUrl } from '../../utils';
import styles from './About.module.css';
import about from '../../data/about.json';

const About = () => {
  return (
    <section className={styles.container} id="about" aria-labelledby="about-title">
      <h2 className={styles.title} id="about-title">About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl('about/aboutImage.png')}
          alt=""
          loading="lazy"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          {about.map(({ title, description, imageSrc }) => (
            <li className={styles.aboutItem} key={title}>
              <img src={getImageUrl(imageSrc)} alt="" loading="lazy" />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
