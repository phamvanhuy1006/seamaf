
import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import { Container, styled } from "@mui/material";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';
import Chip from '@mui/material/Chip';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../Body.scss';

const StatusProduct = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  left: '10px',
  top: '10px',
  height: 'auto!important',
  paddingTop: '3px',
  paddingBottom: '2px',
  backgroundColor: '#50e550',
  textTransform: 'uppercase',
  fontSize: '10px',
  color: '#fff',
  fontWeight: '700',
}));

const Product = (props) => {

  const handleAddCart = () => {
    axios.get(`/api/cart-user/add`, {
      params: {
        product_id: props.product.id,
        user_id: JSON.parse(localStorage.getItem('user'))?.user.id,
        quality: 1
      },
      headers: {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).access_token
      }
    }).then(res => (res.data??alert('Add to cart successful!')))
    .catch(error => console.log(error))
  }

  return (
    <div className="product">
      <div>
        <StatusProduct label="new" color="success" />
        <Link to={`/product/${props.product?.id}`}><img style={{ 'width': '100%', height: '288px' }} src={props.product?.images[0] ? `http://localhost:8000/${props.product?.images[0].path}` :'' } /></Link>
        <div className="carousel-icon">
          <button onClick={handleAddCart} type="button" className="d-flex">
            <span className="add-text">Add to cart</span>
            <ShoppingBagOutlinedIcon />
          </button>
          
          <a className="icon"><FavoriteBorderIcon /></a>
        </div>
      </div>
      <p>
        <span>{props.product?.name}</span>
        <span className="carousel-product-cost">${props.product?.price}</span>
      </p>
    </div>
  );
}

const LastestProducts = () => {

  const properties = {
    duration: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    indicators: false,
  };

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('/api/products/lastest')
      .then((response) => setProducts(response.data))
  }, [])

  return (
    <Container className="carousel">
      <p className="carousel-label">LATEST PRODUCTS</p>
      <Slide {...properties}>
        {products.map(product => ([
          <Product key={product} product={product}/>,
        ]))}
      </Slide>
    </Container>
  );
};

export default LastestProducts;
export { StatusProduct, Product };