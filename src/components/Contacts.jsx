import styles from "./Contacts.module.css";

export default function Contacts({ contacts }) {
    const socialMedia = contacts.socialMedia.map(sm =>
        <a key={sm.name} href={sm.url} target="_blank">
            <img src={sm.image} alt={sm.name} />
        </a>
    );

    return (
        <div className={styles.contacts}>
            <div className={styles.heading}>{contacts.heading}</div>
            <a href={`tel:${contacts.phone}`} className={styles.phone}>{contacts.phone}</a>
            <div className={styles.address}>{contacts.address}</div>
            <div className={styles["email-text"]}>
                Или пишите нам <a href={`mailto:${contacts.email}`} className={styles.email}>{contacts.email}</a>
            </div>
            <div className={styles["social-media"]}>
                {socialMedia}
            </div>
        </div>
    );
}