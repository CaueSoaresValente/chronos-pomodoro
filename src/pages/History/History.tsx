import type React from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../templates/MainTemplate/MainTemplate";
import { Heading } from "../../components/Heading/Heading";
import { DefaultButton } from "../../components/DefaultButton/DefaultButton";
import { TrashIcon } from "lucide-react";
import styles from "./History.module.css";
import { Container } from "../../components/Container/Container";
import { useTaskContext } from "../../contexts/TaskContext/TaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { showMessage } from "../../adapters/showMessage";
import { useEffect, useState } from "react";

export type HomeProps = {
    state: TaskStateModel,
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

export function History() {

    const { state, dispatch } = useTaskContext()
    const [confirmClearHistory, setConfirmClearHistory] = useState(false)

    function handleResetHistory() {
        if (state.tasks.length === 0) {
            showMessage.info("Seu histórico já está vazio.")
            return
        }
        showMessage.dismiss()
        showMessage.confirm("Tem certeza que deseja apagar todo o histórico?", (confirmation) => {
            setConfirmClearHistory(confirmation)
        })
    }

    useEffect(() => {
        if (!confirmClearHistory) return

        setConfirmClearHistory(false)

        dispatch({ type: TaskActionTypes.RESET_TASK })
        showMessage.success("Histórico apagado com sucesso!")
    }, [confirmClearHistory, dispatch])

    const taskTypeDictionary: Record<string, string> = {
        'workTime': 'Foco',
        'shortBreakTime': 'Pausa curta',
        'longBreakTime': 'Pausa longa'
    }

    return (
        <>
            <MainTemplate>
                <Container>
                    <Heading>
                        <span>Histórico</span>
                        <span className={styles.buttonContainer}>
                            <DefaultButton onClick={handleResetHistory} icon={<TrashIcon />} color="red" aria-label="Apagar todo o histórico" title="Apagar todo o histórico" />
                        </span>
                    </Heading>
                </Container>
                <div className={styles.reponsiveTable}>
                    {state.tasks.length === 0 ? (
                        <p style={{ textAlign: 'center', padding: '2rem', fontSize: '1.6rem', opacity: 0.8 }}>
                            Nenhuma tarefa registrada no histórico ainda.
                        </p>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Tarefa</th>
                                    <th>Duração</th>
                                    <th>Data</th>
                                    <th>Status</th>
                                    <th>Tipo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state.tasks.map((task) => (
                                    <tr key={task.id}>
                                        <td>{task.name}</td>
                                        <td>{task.duration} minutos</td>
                                        <td>{formatDate(task.startDate)}</td>
                                        <td>{getTaskStatus(task, state.activeTask)}</td>
                                        <td>{taskTypeDictionary[task.type] || task.type}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </MainTemplate>
        </>
    )
}



