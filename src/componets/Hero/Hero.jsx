import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container} aria-labelledby="hero-title">
      <div className={styles.content}>
        <h1 className={styles.title} id="hero-title">Hi, I&apos;m Zoey</h1>
        <p className={styles.role}>Senior Backend Software Engineer</p>
        <p className={styles.description}>
          I build backend services and data platforms that help teams move data
          reliably across systems and cloud environments.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryAction}>View Projects</a>
          <a href="#contact" className={styles.secondaryAction}>Contact Me</a>
        </div>
      </div>
      <img
        src={getImageUrl('hero/zoey-portrait.jpg')}
        alt=""
        width={680}
        height={850}
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
