import { getCollections } from "@/lib/actions/actions";
import { create } from "zustand";

interface Store {
  collections: CollectionType[];
  setCollections: (collections: CollectionType[]) => void;
  fetchCollections: () => Promise<void>;
}

export const collectionsStore = create<Store>((set) => ({
  collections: [],

  setCollections: (collections: CollectionType[]) => set({ collections }),

  fetchCollections: async () => {
    const collections = await getCollections();
    set({ collections });
  },
}));
