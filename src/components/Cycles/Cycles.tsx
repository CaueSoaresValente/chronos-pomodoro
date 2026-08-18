import { useTaskContext } from "../../contexts/TaskContext/TaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./Cycles.module.css";


export function Cycles() {

    const {state} = useTaskContext()

    const cycleStep = Array(state.currentCycle).fill(null)

    const cycleDescriptionMap = {
        
        workTime: 'Tempo de foco',
        shortBreakTime: 'Pausa curta',
        longBreakTime: 'Pausa longa'
    }





    
    return (
        <>
            <div className={styles.cycles}>
                <span>Ciclos:</span>
                <div className={styles.cyclesDots}>
                    {cycleStep.map((_,index)=>{
                        const nextCycle = getNextCycle(index)
                        const nextCycleType = getNextCycleType(nextCycle)
                        return (
                            <span className={`${styles.cycleDot} ${styles[nextCycleType]}`} aria-label={`Ciclo ${cycleDescriptionMap[nextCycleType]}`} title={`Ciclo ${cycleDescriptionMap[nextCycleType]}`} key={nextCycle}></span>
                        )
                    })}
                </div>
            </div>
        </>
    )
}