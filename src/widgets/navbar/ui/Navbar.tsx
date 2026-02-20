import { useTranslation } from 'react-i18next';
import { classNames } from 'shared';

import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/appLink/AppLink';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links, {}, [className])}>
        <AppLink
          to="/"
          className={classNames(cls.mainLink, {}, [className])}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('main.title')}
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.RED}>
          {t('about.title')}
        </AppLink>
      </div>
    </div>
  );
};
