import styles from './TaskList.module.css';


export function TaskList() {
    return (
        <div>
            <div className={styles.taskStatus}>
                <div className={styles.taskStatusItem}>
                    <span className={styles.taskCreated}>Tarefas criadas</span>
                    <span className={styles.taskCount}>0</span>
                </div>

                <div className={styles.taskStatusItem}>
                    <span className={styles.taskCompleted}>Tarefas Concluídas</span>
                    <span className={styles.taskCount}>0</span>
                </div>
            </div>

        </div>
    )
}

