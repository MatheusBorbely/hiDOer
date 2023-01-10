import styles from "./Header.module.css";
import logo from "../../assets/logo.svg"

export function Header() {
    return ( 
        <header className={styles.header}>
            <img src={logo} title="logo" alt="logotipo To Do app"/>
            <h1 title="todo">
                <span>to</span>
                <span>do</span>
            </h1>
        </header>
     );
}

