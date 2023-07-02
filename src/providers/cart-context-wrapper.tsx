import { ReactNode, useState } from "react";
import { Products, Product } from "../api/products";
import { cartContext, CartContextType } from "./cart-context";

type Props = {
    children: ReactNode;
};

export const CartContextWrapper = ({ children }: Props) => {
    const [cart, setCart] = useState<Products>([]);

    const addProductToCart = (product: Product) => {
        const isProductInCart = cart.some((item) => item.id === product.id);
        if (isProductInCart) {
            setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1  } : item
                )
            );
        } else {
            setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
        }
    };

    const removeProductsFromCart = (product: Product) => {
        setCart(prevCart =>
        prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity  - 1 }
            : item
        ).filter(item => item.quantity !== 0)
      );
    }

    const cartContextValue: CartContextType = {
        cart,
        addProductToCart,
        removeProductsFromCart
    };

    return (
        <cartContext.Provider value={cartContextValue}>
            {children}
        </cartContext.Provider>
    );
};
