import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt='Me sitting with a laptop' className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl ("about/cursorIcon.png")} alt="cursor icon" className={styles.Iconos} />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontend developer with experience in building responsive and optimized sites.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl ("about/designIcon.png")} alt="Design Icon" className={styles.Iconos} />
                        <div className={styles.aboutItemText}>
                            <h3>Graphic Designer</h3>
                            <p>I'm a graphic designer with experience 
                            in creating birthday cards,stickers and other personalized celebration products, focusing on creative and unique designs that make each occasion special
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

