import { useEffect, useReducer, useRef } from "react";
import { initialState } from "./InitialTaskState";
import { TaskContext, type TaskProviderProps } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionTypes } from "./taskActions";
import { loadBeep } from "../../utils/loadBeep";
import type { TaskStateModel } from "../../models/TaskStateModel";

export function TaskContextProvider({ children }: TaskProviderProps) {

    const [state, dispatch] = useReducer(taskReducer, initialState, () => {
        const storageState = localStorage.getItem('state');

        if (storageState === null) return initialState;

        const parsedStorageState = JSON.parse(storageState) as TaskStateModel;

        return {
            ...parsedStorageState,
            activeTask: null,
            secondsRemaining: 0,
            formattedSecondsRemaining: "00:00",
        };
    });

    const playBeep = useRef<(() => void) | null>(null);

    const worker = TimerWorkerManager.getInstance();

    useEffect(() => {
        worker.onMessage((e) => {
            if (typeof e.data === 'number') {
                if (e.data <= 0) {
                    if (playBeep.current) {
                        playBeep.current();
                        playBeep.current = null;
                    }

                    dispatch({
                        type: TaskActionTypes.COMPLETE_TASK
                    });
                } else {
                    dispatch({
                        type: TaskActionTypes.COUNT_DOWN,
                        payload: { secondsRemaining: e.data }
                    });
                }
            }
        });
    }, [worker]);

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state));

        document.title = state.activeTask
            ? `${state.formattedSecondsRemaining} - ${state.activeTask.name} | Chronos - Pomodoro`
            : "Chronos - Pomodoro";

        worker.postMessage(state);
    }, [state, worker]);

    useEffect(() => {
        if (state.activeTask && playBeep.current === null) {
            playBeep.current = loadBeep();
        } else if (!state.activeTask) {
            playBeep.current = null;
        }
    }, [state.activeTask]);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}
