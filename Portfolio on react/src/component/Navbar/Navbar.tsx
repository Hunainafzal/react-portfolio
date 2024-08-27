import React from 'react';
import styles from './Navbar.module.css'; // Adjust the path as needed
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {

  const  [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const  toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

    return (
        <nav className={styles.navbar}>
            <div className={styles.maxWidth}>
                <div className={styles.logo}>
                    <a href="#">
                        Portfo<span>lio</span>
                    </a>
                </div>
                <ul className={`${styles.menu} ${isMenuOpen ? styles.active: ''}`}>
                    <li>
                        <a href="#home" className={styles.menuBtn}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className={styles.menuBtn}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#services" className={styles.menuBtn}>
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className={styles.menuBtn}>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className={styles.menuBtn}>
                            Contact
                        </a>
                    </li>
                </ul>
                <div  className={`${styles.menuBtn} ${isMenuOpen ? styles.menuBtn: styles.active}`} onClick={toggleMenu}>
                  {isMenuOpen ? <FaBars className={isMenuOpen ? styles.active : ''}/> : <FaTimes className={isMenuOpen ? styles.active : ''}/> }
                
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
