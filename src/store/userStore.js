import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUser = create(
  persist((set) => ({
    user: null,
    setUser: (userData) => set((state) => ({ user: { ...userData } })),
    nullifyUser: () => set({ user: null }),
  }))
);
