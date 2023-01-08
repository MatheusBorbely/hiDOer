import { Form } from "../Form/Form";
import { Task } from "../Task/Task";
import { useState } from "react";
import clipboard from "../../assets/clipboard.png"

import styles from "./ToDoList.module.css";

export function ToDoList() {
    const [taskList, setTaskList] = useState([]);
    const taskListIsEmpty = taskList.length;
    
    if(taskListIsEmpty){

    }
    return ( 
        <main className={styles.wrapper}>
            <Form/>
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
                            <Task/>
                            <Task/>
                            <Task/>
                            <Task/>
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
