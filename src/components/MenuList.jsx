import styles from "./MenuList.module.css";
import Card from "./Card";
import { useState, useRef, useEffect } from "react";

export default function MenuList({ items }) {
    const [order, setOrder] = useState("default");
    const [sortClicked, setSortClicked] = useState(false);
    const dropdownRef = useRef(null);

    let copy = [...items];

    if (order === "asc") {
        copy.sort((a, b) => a.price - b.price);
    }

    if (order === "desc") {
        copy.sort((a, b) => b.price - a.price);
    }

    const cards = copy.map(item => <Card key={item.name} item={item} />);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setSortClicked(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <div className={styles.heading}>Menu</div>
            <div className={styles["sort-box"]} ref={dropdownRef}>
                <div className={styles["sort-box-clickable"]} onClick={() => setSortClicked(!sortClicked)}>
                    {
                        order === "default" ? (
                            <div className={styles["sort-box-text"]}>по умолчанию</div>
                        ) : order === "asc" ? (
                            <div className={styles["sort-box-text"]}>цена (низкая - высокая)</div>
                        ) : (
                            <div className={styles["sort-box-text"]}>цена (высокая - низкая)</div>
                        )
                    }
                    <div className={styles["sort-box-button"]}>sort by</div>
                </div>
                {sortClicked &&
                    <div className={styles["sort-dropdown"]} onClick={e => e.stopPropagation()}>
                        <div onClick={() => { setOrder("default"); setSortClicked(false); }}>по умолчанию</div>
                        <div onClick={() => { setOrder("asc"); setSortClicked(false); }}>цена (низкая - высокая)</div>
                        <div onClick={() => { setOrder("desc"); setSortClicked(false); }}>цена (высокая - низкая)</div>
                    </div>
                }
            </div>
            <div className={styles["menu-list"]}>
                {cards}
            </div>
        </>
    );
}