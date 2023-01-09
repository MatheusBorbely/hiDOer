import styles from "./Task.module.css";

import {Trash} from "phosphor-react"
import { ITask } from "../ToDoList/ToDoList";

interface ITaskProp{
    task:  ITask
}
export function Task(props: ITaskProp) {
    return ( 
        <li className={styles.task}>
            <label>
                {props.task.task}
                <input type="checkbox"/>
                <span></span>
            </label>
            <Trash size={16} />
        </li>
     );
}
