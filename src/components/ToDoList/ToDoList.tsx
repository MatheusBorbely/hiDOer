import { Form } from "../Form/Form";
import { Task } from "../Task/Task";
import { useState } from "react";
import uuid from 'react-uuid';
import clipboard from "../../assets/clipboard.png"

import styles from "./ToDoList.module.css";

export interface ITask {
    id: string;
    task: string;
    done: boolean;
}
export function ToDoList() {
    const [taskList, setTaskList] = useState<ITask[]>([]);
    const taskListIsEmpty = 1;
    
    const createNewTask = (task: string) => {
        const newTask = {
            id:uuid(),
            task:task,
            done:false,
        }
        setTaskList((oldTaskList) => 
            [...oldTaskList, newTask]
        );
    }
    return ( 
        <main className={styles.wrapper}>
            <Form handleCreateNewTask={createNewTask} />
            <section className={styles.wrapper__task_container}>
                <div className={styles.wrapper__info_progress}>
                    <strong>
                        Tarefas criadas <span>0</span>
                    </strong>
                    <strong>
                        Concluídas <span>0 de 0</span>
                    </strong>
                </div>
                {
                    taskListIsEmpty ? 
                    
                        <ul className={styles.wrapper__task_list}>
                           {taskList.map((task) => 
                                <Task key={task.id} task={task} />
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
