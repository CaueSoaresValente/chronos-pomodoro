import type React from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../templates/MainTemplate/MainTemplate";
import { Container } from "../../components/Container/Container";
import { DefaultInput } from "../../components/DefaultInput/DefaultInput";
import { SaveIcon } from "lucide-react";
import { DefaultButton } from "../../components/DefaultButton/DefaultButton";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/TaskContext";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export type HomeProps = {
    state: TaskStateModel,
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}


export function Settings() {

    const { state, dispatch } = useTaskContext()

    const workTimeInput = useRef< HTMLInputElement | null>(null)

    const shortBreakTimeInput = useRef< HTMLInputElement | null>(null)

    const longBreakTimeInput = useRef< HTMLInputElement | null>(null)

    function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        showMessage.dismiss()

        const workTimeVal = Number(workTimeInput.current?.value)
        const shortBreakTimeVal = Number(shortBreakTimeInput.current?.value)
        const longBreakTimeVal = Number(longBreakTimeInput.current?.value)

        if (!workTimeVal || !shortBreakTimeVal || !longBreakTimeVal || workTimeVal <= 0 || shortBreakTimeVal <= 0 || longBreakTimeVal <= 0) {
            showMessage.warn("Preencha tempos válidos maiores que 0 minutos!")
            return
        }

        dispatch({
            type: TaskActionTypes.CHANGE_SETTINGS,
            payload: {
                workTime: workTimeVal,
                shortBreakTime: shortBreakTimeVal,
                longBreakTime: longBreakTimeVal
            }
        })

        showMessage.success("Configurações salvas com sucesso!")
    }

    return (
        <>
            <MainTemplate>

                <Container>
                    Configurações
                </Container>
                <Container>
                    <p style={{ textAlign: 'center' }}>Modifique as configurações para tempo de foco, descanso curto e descanso longo (em minutos).</p>
                </Container>
                <Container>
                    <form onSubmit={handleSaveSettings} action='' className='form'>
                        <div className="formRow">
                            <DefaultInput
                                id="workTime"
                                type="number"
                                min={1}
                                max={120}
                                label="Tempo de foco (minutos)"
                                ref={workTimeInput}
                                defaultValue={state.config.workTime}
                            />
                        </div>

                        <div className="formRow">
                            <DefaultInput
                                id="shortBreakTime"
                                type="number"
                                min={1}
                                max={120}
                                label="Tempo de descanso curto (minutos)"
                                ref={shortBreakTimeInput}
                                defaultValue={state.config.shortBreakTime}
                            />
                        </div>

                        <div className="formRow">
                            <DefaultInput
                                id="longBreakTime"
                                type="number"
                                min={1}
                                max={120}
                                label="Tempo de descanso longo (minutos)"
                                ref={longBreakTimeInput}
                                defaultValue={state.config.longBreakTime}
                            />
                        </div>

                        <div className="formRow">
                            <DefaultButton
                                type="submit"
                                icon={<SaveIcon size={24} strokeWidth={2.5} />}
                                aria-label="Salvar Configurações"
                                title="Salvar Configurações"
                            />
                        </div>

 
                    </form>
                </Container>

            </MainTemplate>
        </>
    )
}


