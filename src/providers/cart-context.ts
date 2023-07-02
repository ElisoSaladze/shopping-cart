import { createContext, useContext } from "react";
import { Product, Products } from "../api/products";


export type CartContextType = {
    cart: Products
    addProductToCart: (product: Product) => void
    removeProductsFromCart: (product: Product) => void
}

export const cartContext = createContext<CartContextType>({
    cart: [],
    addProductToCart: () => {},
    removeProductsFromCart: () => {}
})

export const useCart = () => {
    const {cart, addProductToCart, removeProductsFromCart } = useContext(cartContext) 
    return {
        cart,
        addProductToCart,
        removeProductsFromCart
    }
}
