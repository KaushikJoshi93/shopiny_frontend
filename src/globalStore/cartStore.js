import { toast } from 'react-hot-toast';
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware'


export const useCartStore = create(devtools(
  persist((set) => ({
    cartValue: 4,
    addToCart: () => set((state) => {
      toast.success("Item Added to Cart!!")
      return { cartValue: state.cartValue + 1 }
    }),
    removeFromCart: () => set((state) => ({ cartValue: state.cartValue - 1 }))
  }),
  {
    name: "shopinyCartStore",

  }
  )))