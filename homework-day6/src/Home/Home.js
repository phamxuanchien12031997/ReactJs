import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../Home/Home.css'

const Home = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data ?? [])
        } catch (error) {
            alert('Unable to download');
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleLogout = (e) => {
        e.preventDefault();
        navigate('/');
    }

    const handleDetail = (id) => {
        navigate(`/productdetail/${id}`)
    }

    return (
        <div>
            <div className='nameAndOut'>
                <h1>CHIẾN 'S HOUSE</h1>
                <Button variant="outlined" onClick={handleLogout}>Logout</Button>
            </div>
            <div className='product-grid'>
                {products.map((product) => {
                    return (
                        <div className='product' key={product.id}>
                            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
                            <h3>{product.title}</h3>
                            <p>Price: {product.price}</p>
                            <Button variant="outlined" onClick={() => handleDetail(product.id)}>Xem chi tiết</Button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home
