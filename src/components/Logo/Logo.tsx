import { TimerIcon } from "lucide-react";
import styles from "./Logo.module.css";
import { RouterLink } from "../RouterLink/RouterLink";

export function Logo() {
    return (
        <>
            <div className={styles.logo}>
                <RouterLink href="/home" className={styles.logoLink}>
                    <TimerIcon size={64} strokeWidth={3} />
                    <span>Chronos</span>
                </RouterLink>
            </div>
        </>
    )
}