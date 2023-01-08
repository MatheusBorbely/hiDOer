import styles from "./Task.module.css";

import {Trash} from "phosphor-react"

export function Task() {
    return ( 
        <li className={styles.task}>
            <label>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                <input type="checkbox"/>
                <span></span>
            </label>
            <Trash size={16} />
        </li>
     );
}
