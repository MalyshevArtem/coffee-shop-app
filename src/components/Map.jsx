import styles from "./Map.module.css";

export default function Map({ link }) {
    return (
        <iframe className={styles.map} loading="lazy" allowFullScreen src={link} >
        </iframe>
    );
}