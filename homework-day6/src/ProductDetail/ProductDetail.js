import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../ProductDetail/ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(res.data);
      } catch (err) {
        alert('Unable to download');
      }
    };

    fetchDetail();
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className='product-detail'>
      <img src={product.image} alt={product.title} width={200} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>Price: ${product.price}</h3>

      <Button variant="outlined" onClick={() => navigate(-1)}>
        Quay lại
      </Button>
    </div>
  );
};

export default ProductDetail;
