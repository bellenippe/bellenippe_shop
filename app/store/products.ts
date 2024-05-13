import { getProducts } from "@/lib/actions/actions";
import { create } from "zustand";

interface Store {
  products: ProductType[];
  setProducts: (products: ProductType[]) => void;
  fetchProducts: () => Promise<void>;
}

export const productsStore = create<Store>((set) => ({
  products: [],

  setProducts: (products: ProductType[]) => set({ products }),

  fetchProducts: async () => {
    const products = await getProducts();
    set({ products });
  },
}));
