import styles from "./Task.module.css";

import {Trash} from "phosphor-react"
import { ITask } from "../../interfaces/ITask"

interface TaskProps{
    task:  ITask;
    onDeleteTask: (id: string) => void;
}
export function Task(props: TaskProps) {
    const {task: {id, task, isDone}, onDeleteTask} = props;

    const handleClick = () => {
        onDeleteTask(id);
        
    }
    return ( 
        <li className={`${styles.task} ${ !isDone && styles.task__done}` }>
            <label>
                {task}
                <input type="checkbox"/>
                <span></span>
            </label>
            <Trash size={16} onClick={handleClick} />
        </li>
     );
}
