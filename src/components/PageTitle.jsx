import styles from "./PageTitle.module.css";

export default function PageTitle({ heading, subheading}) {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>{heading}</div>
            <div className={styles.subheading}>{subheading}</div>
        </div>
    );
}
