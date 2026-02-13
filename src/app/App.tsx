import "./styles/index.scss"

import { useTheme } from "app/providers/ThemeProvider";

import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
           <Navbar />
            <button type="button" onClick={toggleTheme}>
                Toggle theme
            </button>
           <AppRouter />
        </div>
    )
}

export default App;