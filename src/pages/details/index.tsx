import { useParams } from "react-router-dom"
import { getProduct, Product } from "../../api/products"
import {useState, useEffect} from 'react'

type Params = {
    id: string
}
const ProductsDetailsPage = () => {
    const { id } = useParams<Params>()
    const [product, setProduct] = useState<Product>()
    
    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const ProductData = await getProduct(parseInt(id, 10))
                console.log(ProductData)
                setProduct(ProductData) 
            }
        }
        fetchData()
    }, [id])
    return (
        <div>
            <span>this is details page {id}</span>
            <p>{product?.description}</p>
            <p>{product?.price}</p>
        </div>
    )
}
export default ProductsDetailsPage