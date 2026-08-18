import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./Menu.module.css";
import { useState, useEffect } from "react";
import { RouterLink } from "../RouterLink/RouterLink";

type AvailableThemes = "dark" | "light"

export function Menu() {

    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem("theme") as AvailableThemes || 'dark'
        return storageTheme // === "dark" ? "dark" : "light"
    });

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        setTheme(preveTheme => {
            const nextTheme = preveTheme === "dark" ? "light" : "dark";
            return nextTheme
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])



    const nextThemeIcon = {
        dark: <SunIcon size={24} strokeWidth={2.5} />,
        light: <MoonIcon size={24} strokeWidth={2.5} />
    }



    return (
        <>
            <nav className={styles.menu}>
                <RouterLink href="/home" className={styles.menuLink} aria-label="Ir para a Home" title="Ir para a Home" >
                    <HouseIcon size={24} strokeWidth={2.5} />
                </RouterLink>
                <RouterLink href="/history" className={styles.menuLink} aria-label="Ver o Histórico" title="Ver o Histórico">
                    <HistoryIcon size={24} strokeWidth={2.5} />

                </RouterLink>
                <RouterLink href="/settings" className={styles.menuLink} aria-label="Configurações" title="Configurações">
                    <SettingsIcon size={24} strokeWidth={2.5} />

                </RouterLink>
                <RouterLink href="#" onClick={handleThemeChange} className={styles.menuLink} aria-label="Tema" title="Tema">
                    {nextThemeIcon[theme]}
                </RouterLink>
            </nav>
        </>
    )
}