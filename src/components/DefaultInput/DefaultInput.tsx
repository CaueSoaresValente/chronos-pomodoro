import { forwardRef } from "react";
import styles from "./DefaultInput.module.css";

type DefaultInputProps = {
    id: string
    label?: string
} & React.ComponentProps<'input'>

export const DefaultInput = forwardRef<HTMLInputElement, DefaultInputProps>(
    ({ id, type, label, ...res }, ref) => {
        return (
            <>
                {label && <label htmlFor={id}>{label}</label>}
                <input id={id} type={type} ref={ref} {...res} className={styles.input} />
            </>
        )
    }
)

DefaultInput.displayName = "DefaultInput"