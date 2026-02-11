import type { PropsWithChildren } from "react";
import { useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";


const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme | null;
        return saved ?? Theme.LIGHT;
    });

    const toggleTheme = () => {
        setTheme((current) => {
            const next = current === Theme.DARK ? Theme.LIGHT : Theme.DARK;
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, next);
            return next;
        });
    };

    const defaultThemeProps = useMemo(() => ({
        theme,
        setTheme: (nextTheme: Theme) => {
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, nextTheme);
            setTheme(nextTheme);
        },
        toggleTheme,
    }), [theme])


    return (
        <ThemeContext.Provider value={defaultThemeProps}>
          {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider