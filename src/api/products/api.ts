import { get } from '../../lib/request'

export type Product = {
    category: string
    description: string
    image: string
    price: number
    id: number
    title: string
    rating: {}
    quantity: number;
}

export type Products = Array<Product>

export const getProducts = async () => get<Products>("https://fakestoreapi.com/products/")

export const getProduct = async (productId: number) => get<Product>(`https://fakestoreapi.com/products/${productId}`)
