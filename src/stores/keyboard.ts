import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

interface KeyboardState {
  isFocus: boolean;
  virtualHeight: number;
  handleFocus: () => void;
  setVirtualHeight: (virtualHeight: number) => void;
}

const keyboardCreator: StateCreator<KeyboardState> = (set) => ({
  isFocus: false,
  virtualHeight: 0,
  handleFocus: () =>
    set((state) => ({
      isFocus: !state.isFocus
    })),
  setVirtualHeight: (virtualHeight) =>
    set({
      virtualHeight
    })
});

const useKeyboardStore = create<KeyboardState>()(devtools(keyboardCreator));

export default useKeyboardStore;
