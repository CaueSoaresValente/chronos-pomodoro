import { PauseCircleIcon, PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles/Cycles";
import { DefaultButton } from "../DefaultButton/DefaultButton";
import { DefaultInput } from "../DefaultInput/DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/TaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { Tips } from "../Tips";
import { showMessage } from "../../adapters/showMessage";




export function MainForm() {


  const { state, dispatch } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null)

  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)


  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    showMessage.dismiss()

    const taskName = taskNameInput.current?.value?.trim()

    if (!taskName) {
      showMessage.warn('Preencha um nome para a tarefa!')
      return
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    }

    dispatch({
      type: TaskActionTypes.START_TASK,
      payload: newTask
    })

    if (taskNameInput.current) {
      taskNameInput.current.value = ""
    }

    showMessage.success('Tarefa iniciada!')
  }

  function handleInterruptTask() {
    showMessage.dismiss()
    showMessage.error('Task interrompida!')
    dispatch({
      type: TaskActionTypes.INTERRUPT_TASK
    })
  }



  return (
    <form className='form' style={{ "marginTop": "10.4rem" }} onSubmit={handleCreateNewTask}>
      <div className="formRow">
        <DefaultInput id='5' type='text' label='task' title='TASK' placeholder='Digite algo' ref={taskNameInput} disabled={!!state.activeTask}  // onChange={(e) => {
        //  setTaskValue(e.target.value)
        //}}
        />
      </div>
      <div className="formRow">
        <Tips />
      </div>
      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        {!state.activeTask && (
          <DefaultButton aria-label="Iniciar nova tarefa" title="Iniciar nova tarefa" type="submit" icon={<PlayCircleIcon />} color='green' />
        )}
        {!!state.activeTask && (
          <DefaultButton aria-label="Interromper tarefa atual" title="Interromper tarefa atual" color='red' type="button" icon={<PauseCircleIcon />} onClick={handleInterruptTask} />
        )}

      </div>
    </form>
  );

}