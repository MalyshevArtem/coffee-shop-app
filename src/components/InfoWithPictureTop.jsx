import styles from "./InfoWithPictureTop.module.css";

export default function InfoWithPictureTop({ info }) {
    const socialMedia = info.socialMedia.map(sm =>
        <a key={sm.name} href={sm.url} target="_blank">
            <img src={`${import.meta.env.BASE_URL}${sm.image}`} alt={sm.name} />
        </a>
    );

    const para = info.description.map(p =>
        <div className={styles.paragraph}>
            {p}
        </div>
    );

    return (
        <div className={styles.background}>
            <div className={styles.info}>
                <div className={styles.image}>
                    <img src={`${import.meta.env.BASE_URL}${info.image}`} alt={info.heading} />
                </div>
                <div className={styles["social-media"]}>
                    {socialMedia}
                </div>
                <div className={styles.heading}>{info.heading}</div>
                <div className={styles.description}>
                    {para}
                </div>
            </div>
        </div>
    );
}
