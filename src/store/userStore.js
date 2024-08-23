import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

const userStore = (set) => ({
  user: null,
  setUser: ({ user }) => {
    console.log("Inside User Store:\t", user);

    set((state) => ({ user: { ...user } }));
  },
  nullifyUser: () => set({ user: null }),
});

const useUserData = create(devtools(persist(userStore, { name: "userData" })));

export default useUserData;
