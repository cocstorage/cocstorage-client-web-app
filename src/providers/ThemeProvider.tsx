import { PropsWithChildren, useEffect, useState } from 'react';

import { ThemeMode, ThemeProvider as CocThemeProvider } from '@cocstorage/ui';

import useThemeStore from '@stores/theme';

function ThemeProvider({ children }: PropsWithChildren) {
  const { themeMode, setThemeMode } = useThemeStore();
  const [currentThemeMode, setCurrentThemeMode] = useState<ThemeMode>('light');

  useEffect(() => {
    if (themeMode === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setCurrentThemeMode(isDark ? 'dark' : 'light');
    } else {
      setCurrentThemeMode(themeMode);
    }
  }, [themeMode]);

  useEffect(() => {
    const handleChange = (event: MediaQueryListEvent) => {
      if (themeMode !== 'system') return;

      setThemeMode(event.matches ? 'dark' : 'light');
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleChange);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleChange);
    };
  }, [setThemeMode, themeMode]);

  return <CocThemeProvider theme={currentThemeMode}>{children}</CocThemeProvider>;
}

export default ThemeProvider;
