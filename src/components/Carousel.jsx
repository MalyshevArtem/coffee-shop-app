import { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

export default function Carousel({ slides, interval = 7000 }) {
    const [current, setCurrent] = useState(0);

    function nextSlide() {
        if (current === slides.length - 1) {
            setCurrent(0);
        } else {
            setCurrent(current + 1);
        }
    }

    function prevSlide() {
        if (current === 0) {
            setCurrent(slides.length - 1)
        } else {
            setCurrent(current - 1);
        }
    }

    useEffect(() => {
        const timer = setInterval(() => setCurrent(prev => prev === slides.length - 1 ? 0 : prev + 1 ), interval);

        return () => clearInterval(timer);
    }, [interval, slides.length]);


    return (
        <div className={styles.carousel}>
            <img src={slides[current].image} alt={slides[current].heading} />
            <div className={styles["carousel-heading"]}>
                {slides[current].heading}
            </div>
            <div className={styles["carousel-text"]}>
                {slides[current].text}
            </div>
            <div className={styles["carousel-buttons"]}>
                <button onClick={prevSlide}>❮</button>
                <button onClick={nextSlide}>❯</button>
            </div>
            <div className={styles["carousel-pagination"]}>
                {current + 1} / {slides.length}
            </div>
        </div>
    );
}
