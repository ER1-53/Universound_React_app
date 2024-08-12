import React, { FunctionComponent } from "react"
import { Link } from 'react-router-dom';
import styles from './footer.module.css'

const Footer: FunctionComponent = () => {

    return (
            <footer className={styles.footer}>
            <nav className={styles.nav_footer}>
                <hr />
                <Link to="/"><div className={styles.logo + " " + styles.logo_footer}></div></Link>
                <hr />
                <ul className={styles.RGPD + " " + styles.box_footer}>
                    <li><Link to="/general-condition">Conditions Générales</Link></li>
                    <li><Link to="/cookies">Gestion des Cookies</Link></li>
                    <li><Link to="/legal">Mentions légales</Link></li>
                </ul>
                <hr />
                <ul className={styles.user + " " + styles.box_footer}>
                    <li><Link to="/profile">Profil</Link></li>
                    <li><Link to="/songPage">Last Sound</Link></li>
                    <li><Link to="/playlist">Playlist</Link></li>
                </ul>
                <hr />
                <ul className={styles.contact + " " + styles.box_footer}>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/innovation">Innovation</Link></li>
                </ul>
                <hr />
            </nav>
                <p>create By Team Sound for Holberton</p>
            </footer>
    );
}

export default Footer;
