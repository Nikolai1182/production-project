import { useContext } from 'react';

import { Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const context = useContext(ThemeContext);

  const { theme, toggleTheme } = context;

  return { theme, toggleTheme };
}
