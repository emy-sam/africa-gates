import { create } from 'zustand';

type SpareState = {
  open: boolean;
  setOpen: (open: boolean) => void;
  spare: { id: string; title: string } | null;
  setSpare: (spare: { id: string; title: string }) => void;
};

export const useSpareStore = create<SpareState>((set) => ({
  open: false,
  spare: null,
  setOpen(open) {
    set({ open });
  },
  setSpare(spare) {
    set({ spare });
  },
}));
