import { Link } from "react-router-dom";

import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <Link to="/" className={styles.logo}>
                <div>coffee</div>
                coffee shop
            </Link>
            <div className={styles.navbar}>
                <Link to="/" className={styles["navbar-link"]}>ГЛАВНАЯ</Link>
                <Link to="/menu" className={styles["navbar-link"]}>МЕНЮ</Link>
                <Link to="/about" className={styles["navbar-link"]}>О НАС</Link>
            </div>
            <div class={styles.ghost}></div>
        </div>
    );
}