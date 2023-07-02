import { useCart } from "../../providers/cart-context" 
import { Product } from "../../api/products"

export const Counter = (props: Product) => {
    const { addProductToCart, removeProductsFromCart } = useCart()
    return (
        <div>
            <button onClick={() => addProductToCart(props)}>+</button>
            <span>{props.quantity}</span>
            <button onClick={() => removeProductsFromCart(props)}>-</button>
        </div>
    )
}