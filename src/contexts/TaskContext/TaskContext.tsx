import { createContext, useContext } from "react"
import type { TaskStateModel } from "../../models/TaskStateModel"
import { initialState } from "./InitialTaskState"
import type { TaskActionModel } from "./taskActions"

const initialContextValue = {
    state: initialState,
    dispatch: () => { }
}

export type TaskContextProps = {
    state: TaskStateModel,
    dispatch: React.Dispatch<TaskActionModel>
}

export type TaskProviderProps = {
    children: React.ReactNode
}


export const TaskContext = createContext<TaskContextProps>(initialContextValue)



export function useTaskContext(){
    return useContext(TaskContext)
}