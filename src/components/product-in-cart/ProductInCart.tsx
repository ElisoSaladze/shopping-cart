import { Product } from "../../api/products"
import { Counter } from "../counter"

export const ProductInCart = (props: Product) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <Counter {...props} />
        </div>
    )
}