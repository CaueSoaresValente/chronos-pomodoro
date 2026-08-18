import { useTaskContext } from "../../contexts/TaskContext/TaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"

export function Tips() {

    const { state } = useTaskContext()

    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)


    //Tips
    const tipsForNoActiveTask = {
        workTime: <span>O próximo ciclo é de {state.config.workTime}min</span>,
        shortBreakTime: <span>O próximo Descanso curto é de {state.config.shortBreakTime}min</span>,
        longBreakTime: <span>O próximo Descanso longo é de {state.config.longBreakTime}min</span>,
    }

    const tipsForWhenActiveTask = {
        workTime: <span>Foque por {state.config.workTime}min</span>,
        shortBreakTime: <span>Descanse por {state.config.shortBreakTime}min</span>,
        longBreakTime: <span>Faça uma pausa longer por {state.config.longBreakTime}min</span>,
    }


    return <>

        {state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
        {!state.activeTask && tipsForNoActiveTask[nextCycleType]}

    </>
}