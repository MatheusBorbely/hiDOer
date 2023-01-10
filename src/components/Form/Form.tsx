import styles from "./Form.module.css";
import { PlusCircle } from "phosphor-react"
import { useState, ChangeEvent, FormEvent, InvalidEvent } from "react";

interface IFormProps {
    onCreateNewTask: (task: string) => void;
}

export function Form({onCreateNewTask}: IFormProps) {
    const [task, setTask] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.target.setCustomValidity('')
        setTask(event.target.value);
    }
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        onCreateNewTask(task);
        setTask('');
    }
    const handleNewTaskInvalid = (event: InvalidEvent<HTMLInputElement>) => {
        event.target.setCustomValidity('Esse campo é obrigatório !')
    }
    return ( 
        <section>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input 
                    onChange={handleChange}
                    value={task} type="text" 
                    placeholder="Adicione uma nova tarefa"
                    onInvalid={handleNewTaskInvalid}
                    required    
                />
                <button>Criar <i><PlusCircle size={18} /> </i></button>
            </form>
        </section>
     );
}
