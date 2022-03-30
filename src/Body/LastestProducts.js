
import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import { Container, styled } from "@mui/material";
import './Body.scss';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';
import Chip from '@mui/material/Chip';

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

const Product = () => {
  return (
    <div className="product">
      <div>
        <StatusProduct label="new" color="success" />
        <img style={{ 'width': '100%' }} src="assets/storage/feature-section1.jpg" />
        <div className="carousel-icon">
          <ShoppingBagOutlinedIcon />
          <FavoriteBorderIcon />
        </div>
      </div>
      <p>
        <span>small</span>
        <span className="carousel-product-cost">$10.00</span>
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

  return (
    <Container className="carousel">
      <p className="carousel-label">LATEST PRODUCTS</p>
      <Slide {...properties}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Slide>
    </Container>
  );
};

export default LastestProducts;
export { StatusProduct, Product };