import styles from "./CardList.module.css";
import { Trash } from "@phosphor-icons/react";

function CardList() {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.customRadio}>
                    <input
                        type="radio"
                        id="radio"
                        className={styles.cardRadio}
                    />
                    <label htmlFor="radio" className={styles.cardContent}>
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                    </label>
                    <Trash size={30} className={styles.trashIcon} />
                </div>
            </div>
        </>

    )
}

export default CardList