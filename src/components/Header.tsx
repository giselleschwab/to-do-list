import styles from './Header.module.css';
import toDoLogo from '../assets/Logo.svg';
import { PlusCircle } from '@phosphor-icons/react';

export function Header() {
    return (
        <>
            <div className={styles.header}>
                <img src={toDoLogo} alt="" />

                <form className={styles.toDoForm}>
                    <input type="text" placeholder="Adicione uma nova tarefa" />
                    <button>
                        Criar
                        <PlusCircle size={20} weight="bold" />
                    </button>
                </form>
            </div>
        </>
    )
}

export default Header