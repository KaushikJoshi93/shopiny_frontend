import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware'


export const useUserStore = create(devtools(
  persist((set) => ({
    user: null,
    addUser: (payload) => set(() => {
      return { user: payload }
    }),
    removeUser: () => set({user:null})
  }),
  {
    name: "shopinyUser",

  }
  )))