import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

interface SubjectState {
  show: boolean;
  setShow: (show: boolean) => void;
}

const subjectCreator: StateCreator<SubjectState> = (set) => ({
  show: false,
  setShow: (show) =>
    set({
      show
    })
});

const useSubjectStore = create<SubjectState>()(devtools(subjectCreator));

export default useSubjectStore;
