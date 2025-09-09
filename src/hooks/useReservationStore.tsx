// src/store/useReservationStore.ts
import { create } from "zustand";

interface ReservationStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useReservationStore = create<ReservationStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
