import { Link } from "react-router-dom"
import { classNames } from "shared"

import * as cls from "./Navbar.module.scss"
import { AppLink } from "shared/ui"
import { AppLinkTheme } from "shared/ui/AppLink/AppLink"

interface NavbarProps {
    className?: string
}

export const Navbar = ({className} : NavbarProps) => {

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.links, {}, [className])}>
             <AppLink 
             to="/" 
             className={classNames(cls.mainLink, {}, [className])}
             theme={AppLinkTheme.SECONDARY}
             >
                Главная
            </AppLink>
             <AppLink 
             to="/about"
             theme={AppLinkTheme.RED}
             >
                О сайте
            </AppLink>
            </div>
        </div>
    )
}

