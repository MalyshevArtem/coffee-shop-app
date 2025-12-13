import styles from "./Card.module.css";

export default function Card({item}) {
    return (
        <div className={styles.card}>
            <div className={styles.card__image}>
                <img src={`${import.meta.env.BASE_URL}${item.image}`}/>
            </div>
            <div className={styles.card__name}>{item.name}</div>
            <div className={styles.card__description}>{item.description}</div>
            <div className={styles.card__price}>{item.price}₽</div>
        </div>
    );
}