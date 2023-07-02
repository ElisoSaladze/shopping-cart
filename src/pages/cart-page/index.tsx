import { Cart } from "../../components/product-cart"
import { useCart } from "../../providers/cart-context"
import { ProductInCart } from "../../components/product-in-cart"

const CartPage = () => {
    const { cart } = useCart()
    return (
        <div>
            <Cart />
            <div>
                {cart.map(product => (
                    <ProductInCart key={product.id} {...product} />
                ))}
            </div>
        </div>
    )
}

export default CartPage