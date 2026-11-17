import { useState } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

const links = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <a className={styles.title} href="#top" onClick={() => setMenuOpen(false)}>
        Zoey Long
      </a>
      <div className={styles.menu}>
        <button
          type="button"
          className={styles.menuBtn}
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="navigation-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src={getImageUrl(menuOpen ? 'nav/closeIcon.png' : 'nav/menuIcon.png')}
            alt=""
          />
        </button>
        <ul
          id="navigation-links"
          className={menuOpen ? `${styles.menuItems} ${styles.menuOpen}` : styles.menuItems}
        >
          {links.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
