import styles from "./Footer.module.css";
import { RouterLink } from "../RouterLink/RouterLink";

export function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <RouterLink href="/about-pomodoro" className={styles.footerLink}>Entenda como funciona a técnica pomodoro</RouterLink>
                <RouterLink href="/" className={styles.footerLink}>Chronos Pomodoro &copy; {new Date().getFullYear()} - feito por Cauê Soares Valente</RouterLink>
            </footer>
        </>
    )
}