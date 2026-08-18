import type React from "react";
import { CountDown } from "../../components/CountDown/CountDown";
import { MainForm } from "../../components/MainForm/MainForm";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../templates/MainTemplate/MainTemplate";

export type HomeProps = {
    state: TaskStateModel,
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}


export function Home() {
    
    return (
        <>
            <MainTemplate>
                <CountDown/>
                <MainForm/>
            </MainTemplate>
        </> 
    )
}


