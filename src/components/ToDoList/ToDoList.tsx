import { Form } from "../Form/Form";
import { Task } from "../Task/Task";
import {ITask} from "../../interfaces/ITask"
import { useState } from "react";
import uuid from 'react-uuid';
import clipboard from "../../assets/clipboard.png"

import styles from "./ToDoList.module.css";


export function ToDoList() {
    const [taskList, setTaskList] = useState<ITask[]>([]);
    const IsTaskListEmpty = taskList.length === 0;
    const taskListLenght = taskList.length; 

    const handleCreateNewTask = (task: string) => {
        const newTask = {
            id:uuid(),
            task:task,
            done:false,
        }
        setTaskList((oldTaskList) => 
            [...oldTaskList, newTask]
        );
    }

    const handleDeleteTask = (id: string) => {
        const newTaskList = taskList.filter( task => task.id !== id);
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
                        Concluídas <span>0 de 0</span>
                    </strong>
                </div>
                {
                    !IsTaskListEmpty ? 
                    
                        <ul className={styles.wrapper__task_list}>
                           {taskList.map((task) => 
                                <Task key={task.id} task={task} onDeleteTask={handleDeleteTask }  />
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
