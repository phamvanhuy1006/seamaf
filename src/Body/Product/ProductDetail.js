import Breadcrumbs from "../../Component/Breadcrumbs";
import React from "react";
import { Container, Box } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Quantity from "../../Component/Quantity";
import NestedList from "../../Component/NestedList";
import { Product } from "../Home/LastestProducts";
import { useState, useEffect } from "react";
import axios from "axios";
import SimilarProducts from "./SimilarProducts";

import '../product.scss';

const ProductDetail = () => {
  const params = useParams()

  const [product, setProduct] = useState(false)

  useEffect(() => {
    axios.get('/api/products/'+ params.id)
    .then(response => setProduct(response.data))
  }, [params])

  const handleAddCart = () => {
    axios.get(`/api/cart-user/add`, {
      params: {
        product_id: params.id,
        user_id: JSON.parse(localStorage.getItem('user'))?.user.id,
        quality: localStorage.getItem(`quantity/product/${params.id}`)
      },
      headers: {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).access_token
      }
    })
  }

  return (
    <React.Fragment>
      <div className="product-header-bg">
        <Container>
            <h4>{product?.category?.name}</h4>
            <Breadcrumbs /> 
        </Container>
      </div>
      <Container className="product">
        <div>
          <div className="back-link"><Link className="product-link" to="/">{"<< Back to Categories"}</Link></div>
          <Box className="admin"
            sx={{
              display:'grid',
              gridTemplateColumns: {
                lg: '1fr 1fr',
              },
              gap: 4
            }}>
               <div>
               { product ?
                <img width="100%" height="720px" src={product?.images[0] ? `http://localhost:8000/${product?.images[0]?.path}` : ''} /> : ''}
                <div>
                  <img width="116px" height="116px" src="https://iblue.vn/uploads/news/2016_12/huong-dan-chup-hinh-quan-ao.jpg" />
                </div>
              </div>  
              <div>
                <h2>{product?.name}</h2>
                <h3>{product?.price}</h3>
                <h4>Availability: <span>In Stock</span></h4>
                <div className="quantity-box">
                  <span>Quantity</span>
                  <Quantity productId={product.id}/>
                </div>
                <Link to="/cart-user"><button className="button" onClick={handleAddCart}>Add To Cart</button></Link>
                <hr/>
                <NestedList title="description" content={product?.description} />
                <hr/>
                <NestedList title={"Shipping & return"} content="content" />
                <hr/>
              </div>
          </Box>
        </div>
        <SimilarProducts category={product.category_id}/>
      </Container>
    </React.Fragment>
  )
}

export default ProductDetail;