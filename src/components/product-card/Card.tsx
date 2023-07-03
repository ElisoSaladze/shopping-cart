import { Product } from "../../api/products"
import { useCart } from '../../providers/cart-context'
import './card.css'

type Props = Product & {
    onClick?: () => void
}

export const Card = (props: Props) => {
    const { addProductToCart } = useCart()

    return (
        <div 
        className="card"
        tabIndex={0}
        onClick={() => (props.onClick ? props.onClick() : null)}
      >
            <h2>{props.title}</h2>
            <span>{props.price}</span>
            <img src={props.image} alt="product" />
            <button onClick={(event) => {
                event.stopPropagation();
                addProductToCart(props)
            }}>add to cart</button>
        </div>
    )
}