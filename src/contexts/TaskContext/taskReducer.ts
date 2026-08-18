import type { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecondsToMinutes } from "../../utils/formatSecondstominutes";
import { getNextCycle } from "../../utils/getNextCycle";
import { initialState } from "./InitialTaskState";
import { TaskActionTypes, type TaskActionModel } from "./taskActions";

export function taskReducer(state: TaskStateModel, action: TaskActionModel): TaskStateModel {
    // Sempre deve retornar o estado atual ou modificado

    switch (action.type) {
        case TaskActionTypes.START_TASK: {

            const newTask = action.payload
            const nextcycle = getNextCycle(state.currentCycle)
            const secondsRemaining = newTask.duration * 60

            return {
                ...state,
                activeTask: newTask,
                secondsRemaining,
                currentCycle: nextcycle,
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                tasks: [...state.tasks, newTask]
            }
        }
        case TaskActionTypes.INTERRUPT_TASK: {
              return {
                    ...state,
                    activeTask: null,
                    secondsRemaining: 0,
                    formattedSecondsRemaining: "00:00",
                    tasks: state.tasks.map(task => {
                        if(task.id === state.activeTask?.id){
                          return{...task, interruptDate: Date.now()}
                        }
                        return task
                    })
                  }
        }
        case TaskActionTypes.RESET_TASK: {
            return {
                ...initialState,
                config: state.config
            };
        }
        case TaskActionTypes.COUNT_DOWN: {
            return {
                ...state,
                secondsRemaining: action.payload.secondsRemaining,
                formattedSecondsRemaining: formatSecondsToMinutes(action.payload.secondsRemaining)
            }
        }
        case TaskActionTypes.COMPLETE_TASK: {
              return {
                    ...state,
                    activeTask: null,
                    secondsRemaining: 0,
                    formattedSecondsRemaining: "00:00",
                    tasks: state.tasks.map(task => {
                        if(task.id === state.activeTask?.id){
                          return{...task, completeDate: Date.now()}
                        }
                        return task
                    })
                  }
        }
        case TaskActionTypes.CHANGE_SETTINGS: {
            return{
                ...state,
                config: {...action.payload}
            }
        }
        default: return state
    }





}