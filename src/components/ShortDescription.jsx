import { Link } from "react-router-dom";

import styles from "./ShortDescription.module.css";

export default function ShortDescription({heading, button, children}) {
    return (
        <div className={styles.description}>
            <div className={styles.description__heading}>{heading}</div>
            <div className={styles.description__text}>
                {children}
            </div>
            <Link to="/about">
                <button className={styles.description__button}>{button}</button>
            </Link>
        </div>
    );
}
