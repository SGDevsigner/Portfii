import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = ( ) => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/mailIcon.png")} alt="Email Icon" className={styles.contactImg} />
                    <a href="mailto:sg.dev6@gmail.com">sg.dev6@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/gitIcon.png")} alt="GitHub Icon" className={styles.contactImg} />
                    <a href="www.github.com">Github.com/SGDevsigner</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" className={styles.contactImg} />
                    <a href="www.linkedin.com">Linkedin.com/Sam-Gomez</a>
                </li>
            </ul>
        </footer>
    )
}