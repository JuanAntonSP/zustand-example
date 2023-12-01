import { create } from "zustand";

type Store = {
  count: number;
  inc: () => void;
};

export const useCounterStore = create<Store>((set) => ({
  count: 10,
  inc: () =>
    set((state) => ({
      count: state.count + 1,
    })),
}));
