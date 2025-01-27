import styles from './Header.module.css';
import toDoLogo from '../assets/Logo.svg';
import { PlusCircle } from '@phosphor-icons/react';
import { ChangeEvent, FormEvent, useState } from 'react';
import CardList from './CardList';
import { TaskList } from './TaskList';


export function Header() {
    // newTask armazena o valor do texto digitado no input
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState<string[]>([]);

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
    }

    function handleNewTaskSubmit(event: FormEvent) {
        event.preventDefault();

        // verifica se o texto é vazio ou contém apenas espaços
        if (newTask.trim() === '') {
            return;
        }

        // a nova tarefa newTask é adicionada ao array tasks
        setTasks([...tasks, newTask]);
        setNewTask('');

    }

    function handleDeleteTask(taskToDelete: string) {
        setTasks(tasks.filter(task => task !== taskToDelete));
    }

    return (
        <>
            <div className={styles.header}>
                <img src={toDoLogo} alt="" />

                <form onSubmit={handleNewTaskSubmit} className={styles.toDoForm}>
                    <input
                        type="text"
                        placeholder="Adicione uma nova tarefa"
                        value={newTask}
                        onChange={handleNewTaskChange}
                    />
                    <button>
                        Criar
                        <PlusCircle size={20} weight="bold" />
                    </button>
                </form>
            </div>

            <TaskList />

            {tasks.map((task, index) => (
                <CardList
                    key={index}
                    task={task}
                    onDelete={() => handleDeleteTask(task)} />
            ))}

        </>
    )
}

export default Header