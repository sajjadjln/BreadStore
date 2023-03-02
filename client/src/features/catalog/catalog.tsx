import { useState, useEffect } from "react";
import { Product } from "../../app/models/products";
import ProductList from "./ProductList";

export default function Catalog( ) {
    const[products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
      fetch('https://localhost:5002/api/products')
        .then(Response => Response.json())
        .then(data => setProducts(data))
    },[])
    return (
        <>
            <ProductList products={products}/>
        </>
    )
}