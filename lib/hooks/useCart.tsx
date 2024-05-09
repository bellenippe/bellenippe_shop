import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartItem {
  item: ProductType;
  quantity: number;
  color?: string;
  size?: string;
}

interface CartStore {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (idToRemove: string) => void;
  increaseQuantity: (idToIncrease: string) => void;
  decreaseQuantity: (idToDecrease: string) => void;
  clearCart: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      cartItems: [],

      //! Ajout d'un item au panier
      addItem: (data: CartItem) => {
        const { item, quantity, color, size } = data;

        const currentItems = get().cartItems; // Tous les items déja dans le panier

        const existingItem = currentItems.find(
          (cartItem) => cartItem.item._id === item._id
        ); // On cherche si l'item est déja dans le panier

        if (existingItem) {
          return toast("Cet article est déja dans votre panier", {
            icon: "🛒",
          });
        }

        set({ cartItems: [...currentItems, { item, quantity, color, size }] });
        toast.success("Article ajouté au panier", { icon: "🛒" });
      },

      //! Suppression d'un item du panier
      removeItem: (idToRemove: String) => {
        const newCartItems = get().cartItems.filter(
          (cartItem) => cartItem.item._id !== idToRemove
        );
        set({ cartItems: newCartItems });
        toast.success("Article supprimé", { icon: "🛒" });
      },

      //! Augmenter la quantité d'un item
      increaseQuantity: (idToIncrease: String) => {
        const newCartItems = get().cartItems.map((cartItem) =>
          cartItem.item._id === idToIncrease
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        set({ cartItems: newCartItems });
      },

      //! Diminuer la quantité d'un item
      decreaseQuantity: (idToDecrease: String) => {
        const newCartItems = get().cartItems.map((cartItem) =>
          cartItem.item._id === idToDecrease
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        set({ cartItems: newCartItems });
      },

      //! Vider le panier
      clearCart: () => {
        set({ cartItems: [] });
      },
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
  )
);

export default useCart;
