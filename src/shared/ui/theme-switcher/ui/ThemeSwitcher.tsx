import { classNames, ThemeDarkIcon, ThemeLightIcon } from 'shared';

import { Theme, useTheme } from 'app/providers/ThemeProvider';

import { Button, ThemeButton } from 'shared/ui/button/ui/Button';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(cls.themeSwitcher, {}, [className])}>
      <Button theme={ThemeButton.CLEAR} onClick={toggleTheme}>
        {theme === Theme.DARK ? (
          <ThemeDarkIcon className={cls.themeDarkIcon} />
        ) : (
          <ThemeLightIcon className={cls.themeLightIcon} />
        )}
      </Button>
    </div>
  );
};
