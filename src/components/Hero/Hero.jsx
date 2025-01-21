import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content} >
                <h1 className={styles.title}>Hola, soy Sam</h1>
                <p className={styles.description}>
                    Soy a Front-end developer and Graphic Designer with 2 years of experience using React and NodeJS. Reach out if you d like to learn more!
                    </p>
                    <a href="mailto:sg.dev6@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
                <img src={getImageUrl ("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
                    <div className={styles.topBlur} />
                    <div className={styles.BottomBlur} />
        </section>
    )
}

