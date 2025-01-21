import styles from "./CardList.module.css";
import { Trash } from "@phosphor-icons/react";

interface CardListProps {
    task: string;
}

function CardList({ task }: CardListProps) {
    return (

        <div className={styles.card}>
            <div className={styles.customRadio}>
                <input
                    type="radio"
                    id={`task-${task}`}
                    className={styles.cardRadio}
                />
                <label htmlFor="radio" className={styles.cardContent}>
                    {task}
                </label>
                <Trash size={30} className={styles.trashIcon} />
            </div>
        </div>


    )
}

export default CardList