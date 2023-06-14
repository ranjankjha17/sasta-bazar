import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const ProductSearch = () => {

  const [products,setProducts]=useState([])
    

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const product = await axios.get("https://fakestoreapi.com/products")

                setProducts(product.data)
                
            } catch (error) {
                console.log(error)
                
            }
        }

        fetchProducts()
    }, [])

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProductSearch