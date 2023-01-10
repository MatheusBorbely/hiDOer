import styles from "./Task.module.css";

import {Trash} from "phosphor-react"
import { ITask } from "../../interfaces/ITask"

interface TaskProps{
    task:  ITask;
    onDeleteTask: (id: string) => void;
    onFinishTask: (id: string) => void;
}
export function Task(props: TaskProps) {
    const {task: {id, task, isDone}, onDeleteTask, onFinishTask} = props;

    const handleDeleteTask = () => {
        onDeleteTask(id);    
    }
    const handleFinishTask = () => {
        onFinishTask(id);    
    }
    return ( 
        <li className={`${styles.task} ${ isDone ? styles.task__done : ''}` } >
            <label >
                {task}
                <input type="checkbox"onClick={handleFinishTask}/>
                <span></span>
            </label>
            <Trash size={16} onClick={handleDeleteTask} />
        </li>
     );
}
