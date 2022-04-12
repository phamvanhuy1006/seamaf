import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect} from 'react';
import Quantity from '../../Component/Quantity';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import axios from 'axios';

import './cart.scss';

export default function CartTable() {

  const [carts, setCarts] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  const [cartQuality, setCartQuality] = useState(0)

  useEffect(() => {
    axios.get('/api/cart-user', {
      params: {
        user_id: 1,
      },
      headers: {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).access_token
      }
    }).then(res => setCarts(res.data))
  }, [cartQuality, loading])

  const handleDeleteCart = (id) => {
    axios.delete(`/api/cart-user/${id}`, {
      headers: {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).access_token
      }
    }).then(setLoading(!loading))
  }


  const handleCartPrice = (e) => {
    setCartQuality(prev =>{
      return e.target.getAttribute('data-value')
    })
  }

  useEffect(() => {
    let sum = 0
    {carts.map(cart => ([
      sum += Number(cart.price)*Number(cart.quality)
    ]))}
    setTotalPrice(sum)
  }, [carts])
  return (
    <div className="cart-table">
      <TableContainer sx={{ boxShadow: 'none', backgroundColor: 'inherit' }} component={Paper}>
        <h3>Your Cart</h3>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="table-title" align="center">Product</TableCell>
              <TableCell className="table-title" align="center"></TableCell>
              <TableCell className="table-title" align="center">Quantity</TableCell>
              <TableCell className="table-title" align="center">Size</TableCell>
              <TableCell className="table-title" align="center">Price</TableCell>
              <TableCell className="table-title" align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {carts.map((cart) => (
              <TableRow
                key={cart.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={cart.image} alt="product_image" width="73px" />
                </TableCell>
                <TableCell display="flex" sx={{ maxWidth: '200px' }}>
                  <h4 className="product-name">{cart.name}</h4>
                  <p className="product-price">${cart.price}</p>
                </TableCell>
                <TableCell align="center"><Quantity onClick={handleCartPrice} productId={cart.product_id} price={cart.price} dataValue={cart.quality} cartId={cart.id} /></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">{cart.price*cart.quality}</TableCell>
                <TableCell align="right"><ClearOutlinedIcon className="icon-x" onClick={e => handleDeleteCart(cart.id)} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="table-footer">
        <h6>
          Total
          <span>${totalPrice}</span>
        </h6>
      </div>
    </div>
  );
}