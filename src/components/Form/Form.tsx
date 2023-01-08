import styles from "./Form.module.css";
import { PlusCircle } from "phosphor-react"

export function Form() {
    return ( 
        <form className={styles.form}>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button>Criar <i><PlusCircle size={16} /> </i></button>
        </form>
     );
}
