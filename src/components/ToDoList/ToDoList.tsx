import { useState } from "react";
import styles from "./ToDoList.module.css";

import { Form } from "../Form/Form";
import { Task } from "../Task/Task";
import {ITask} from "../../interfaces/ITask";
import clipboard from "../../assets/clipboard.png";

import uuid from 'react-uuid';

export function ToDoList() {
    const [taskList, setTaskList] = useState<ITask[]>([]);
    const IsTaskListEmpty = taskList.length === 0;
    const taskListLenght = taskList.length; 
    const countTaskDone = taskList.reduce<number>(
        (accumulator: number, currentValue: ITask) => currentValue.isDone ? ++accumulator : accumulator, 0
    )

    const handleCreateNewTask = (task: string) => {
        const newTask = {
            id:uuid(),
            task:task,
            isDone:false,
        }
        setTaskList((oldTaskList) => 
            [...oldTaskList, newTask]
        );
    }
    const handleDeleteTask = (id: string) => {
        const newTaskList = taskList.filter( task => task.id !== id);
        setTaskList(newTaskList); 
    }
    const handleFinishTask = (id: string) => {
        const newTaskList = taskList.map(task => {
            if (task.id === id) return {...task, isDone: !task.isDone};
            return task;
        });
        setTaskList(newTaskList);
    }

    return ( 
        <main className={styles.wrapper}>
            <Form onCreateNewTask={handleCreateNewTask} />
            <section className={styles.wrapper__task_container}>
                <div className={styles.wrapper__info_progress}>
                    <strong>
                        Tarefas criadas <span>{taskListLenght}</span>
                    </strong>
                    <strong>
                        Concluídas <span>{countTaskDone} de {taskListLenght}</span>
                    </strong>
                </div>
                {
                    !IsTaskListEmpty ? 
                    
                        <ul className={styles.wrapper__task_list}>
                           {taskList.map((task) => 
                                <Task key={task.id} task={task} onDeleteTask={handleDeleteTask} onFinishTask={handleFinishTask}  />
                            )}
                        </ul> 
                    :  
                        <div className={styles.wrapper__emptyList}>
                            <img className={styles.wrapper__clipboard} src={clipboard} title="Clipboard" alt="Clipboard"/>
                            <div>
                                <p>
                                    <strong>Você ainda não tem tarefas cadastradas</strong>
                                </p>
                                <p>
                                    Crie tarefas e organize seus itens a fazer
                                </p>
                            </div>
                        </div>      
                }   
            </section>
        </main>
     );
}
