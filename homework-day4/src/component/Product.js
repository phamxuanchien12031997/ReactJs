import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Product = () => {

    const [products, setProduct] = useState([]);

    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProduct(response.data ?? []);
        } catch (error) {
            alert("Không tải được !!!");
        }
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            {products.map((product) => {
                return (
                    <div className='product' key={product.id}>
                        <h3>{product.title}</h3>
                        <p>Price: {product.price}</p>
                        <img src={product.image} alt={product.title} style={{ width: '100px' }} />
                    </div>
                )
            })}
        </div>
    )
}

export default Product
