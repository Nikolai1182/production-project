import { useTranslation } from 'react-i18next';
import { classNames } from 'shared';

import { i18n } from 'shared/config/i18n';
import { Button, ThemeButton } from 'shared/ui/button/ui/Button';

import cls from './langSwitcher.module.scss';

interface langSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: langSwitcherProps) => {
  const { t } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(cls.langSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
    >
      {t('language')}
    </Button>
  );
};
