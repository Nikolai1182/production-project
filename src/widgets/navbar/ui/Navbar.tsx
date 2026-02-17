import { classNames } from 'shared';

import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/appLink/AppLink';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
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
        <AppLink to="/about" theme={AppLinkTheme.RED}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
