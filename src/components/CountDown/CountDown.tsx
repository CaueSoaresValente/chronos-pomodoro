

import styles from "./CountDown.module.css";
import { useTaskContext } from "../../contexts/TaskContext/TaskContext";


export function CountDown() {

    const {state} = useTaskContext()

    return (
        <>
            <div className={styles.countDown}>{state.formattedSecondsRemaining}</div> 
        </>
    )
}