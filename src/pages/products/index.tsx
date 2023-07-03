import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProducts, Products } from '../../api/products'
import { Card } from '../../components/product-card'
import { Cart } from '../../components/product-cart'

const ProductsPage = () => {
    const [products, setProducts] = useState<Products>()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const products = await getProducts()
            console.log(products)
            setProducts(products)
        }
        fetchData()
    }, [])
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px'
        }}>
            <Cart />
            {products?.map(product => (
                <Card key={product.id} {...product} 
                onClick={() => navigate(`/products/${product.id}`)}
                />
            ))}
        </div>
    )
}

export default ProductsPage