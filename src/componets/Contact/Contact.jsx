import { getImageUrl } from '../../utils';
import contacts from '../../data/contact.json';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <footer id="contact" className={styles.container} aria-labelledby="contact-title">
      <div className={styles.content}>
        <div>
          <h2 id="contact-title">Contact</h2>
          <p>Let’s talk about backend engineering, data platforms, or potential opportunities.</p>
        </div>
        <ul className={styles.links}>
          {contacts.map(({ title, link, imageSrc }) => (
            <li key={title}>
              <a href={title === 'Email' ? `mailto:${link}` : link}>
                <img src={getImageUrl(imageSrc)} alt="" loading="lazy" />
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Contact;
