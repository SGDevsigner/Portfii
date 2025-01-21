import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
    return (
        <section>
            <h2>About</h2>
            <div>
                <img src={getImageUrl("about/aboutImage.png")} alt='Me sitting with a laptop' /></div>
        </section>
    )
}

