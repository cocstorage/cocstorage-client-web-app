import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

interface CategoryState {
  selectedCategoryId: number;
  setSelectedCategoryId: (selectedCategoryId: number) => void;
}

const categoryCreator: StateCreator<CategoryState> = (set) => ({
  selectedCategoryId: 0,
  setSelectedCategoryId: (selectedCategoryId) =>
    set({
      selectedCategoryId
    })
});

const useCategoryStore = create<CategoryState>()(devtools(categoryCreator));

export default useCategoryStore;
