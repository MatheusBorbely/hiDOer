import styles from "./Form.module.css";
import { PlusCircle } from "phosphor-react"
import { useState, ChangeEvent, FormEvent } from "react";

interface IFormProp {
    handleCreateNewTask: (task: string) => void;
}

export function Form({handleCreateNewTask}: IFormProp) {
    const [task, setTask] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        handleCreateNewTask(task);
        setTask('');
    }
    return ( 
        <form onSubmit={handleSubmit} className={styles.form}>
            <input onChange={handleChange} value={task} type="text" placeholder="Adicione uma nova tarefa" />
            <button>Criar <i><PlusCircle size={16} /> </i></button>
        </form>
     );
}
