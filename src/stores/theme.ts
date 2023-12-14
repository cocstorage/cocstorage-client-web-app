import { ThemeMode } from '@cocstorage/ui';
import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ThemeState {
  themeMode: ThemeMode | 'system';
  setThemeMode: (themeMode: ThemeMode | 'system') => void;
}

const themeCreator: StateCreator<ThemeState> = (set) => ({
  themeMode: 'system',
  setThemeMode: (themeMode) =>
    set({
      themeMode
    })
});

const useThemeStore = create<ThemeState>()(devtools(themeCreator));

export default useThemeStore;
