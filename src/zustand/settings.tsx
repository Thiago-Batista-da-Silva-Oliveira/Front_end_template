import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface ISettings {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    drawerMode: 'default' | 'mini';
    toggleDrawerMode: () => void;
}

export const useSettingsStore = create(
  persist<ISettings>(
    (set, get) => ({
        theme: 'light',
        toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
        drawerMode: 'default',
        toggleDrawerMode: () => set((state) => ({ drawerMode: state.drawerMode === 'default' ? 'mini' : 'default' })),
    }),
    {
      name: 'settings',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)