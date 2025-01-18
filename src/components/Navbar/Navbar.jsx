
import React, { useState } from "react";
import { getImageUrl } from '../../utils';
import styles from './Navbar.module.css';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Portfolio
            </a>
            <div className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
                <button className={styles.menuBtn} onClick={toggleMenu}>
                    <img
                        src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                        alt="menu-button"
                    />
                </button>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen} onClick={( ) => setMenuOpen(false)}`}
                    >
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};
