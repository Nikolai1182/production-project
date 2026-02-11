import { Link, Route, Routes } from "react-router-dom";

import { Suspense } from "react";


import "./styles/index.scss"

import { useTheme } from "app/providers/ThemeProvider";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "shared";





const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to="/">Главная</Link>
            <Link to="/about">О сайте</Link>
            <button type="button" onClick={toggleTheme}>
                Toggle theme
            </button>
             <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
            </Suspense>
        </div>
    )
}

export default App;