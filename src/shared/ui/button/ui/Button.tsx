import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps {
  className?: string;
  theme?: ThemeButton;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, theme, children, ...otherProps } = props;

  return (
    <button className={classNames(cls.button, { [cls[theme]]: true }, [className])} {...otherProps}>
      {children}
    </button>
  );
};
