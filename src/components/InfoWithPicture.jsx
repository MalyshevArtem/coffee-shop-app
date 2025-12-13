import styles from "./InfoWithPicture.module.css";
import { Link } from "react-router-dom";

export default function InfoWithPicture({ info }) {
    return (
        <div className={styles.info}>
            <div className={styles.info__heading}>{info.heading}</div>
            <div className={styles.info__content}>
                <div className={styles.description}>
                    <div className={styles.description__heading}>{info.descHeading}</div>
                    <div className={styles.description__text}>{info.description}</div>
                    <Link to="menu" className={styles.link}>
                        <div className={styles.description__button}>
                            {info.buttonText}
                        </div>
                    </Link>
                </div>
                <div className={styles.image}>
                    <img src={info.image} alt={info.heading} />
                </div>
            </div>
        </div>
    );
}