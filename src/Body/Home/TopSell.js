import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Product } from './LastestProducts.js';
import React, { useState, useEffect } from "react";
import axios from "axios";

import '../Body.scss';

const TopSell = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('/api/products/top-selling')
      .then((response) => setProducts(response.data))
  }, [])

  return (
    <div>
      <Container>
        <p className="carousel-label">TOP SELLING</p>
        <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            lg: '1fr 1fr 1fr 1fr',
            md: '1fr 1fr 1fr',
            sm: '1fr 1fr',
            xs: '1fr',
          },
          width: '100%',
        }}
        >
        {products.map(product => ([
          <div key={product.id}><Product product={product}/></div>
        ]))}
        </Box>
      </Container>
      </div>
  );
}

export default TopSell;