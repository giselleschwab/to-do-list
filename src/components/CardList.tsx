import styles from "./CardList.module.css";
import { Trash } from "@phosphor-icons/react";

interface CardListProps {
    task: string;
    onDelete: () => void;
}

function CardList({ task, onDelete }: CardListProps) {
    return (

        <div className={styles.card}>
            <div className={styles.customCheckbox}>
                <input
                    type="checkbox"
                    id={`task-${task}`}
                    className={styles.cardCheckbox}
                />
                <label htmlFor={`task-${task}`} className={styles.cardContent}>
                    {task}
                </label>
                <Trash
                    size={30}
                    className={styles.trashIcon}
                    onClick={onDelete}
                />
            </div>
        </div>


    )
}

export default CardList