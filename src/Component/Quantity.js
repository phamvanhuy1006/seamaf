import { TextField, Box } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

import './quantity.scss';

const Quantity = ({dataValue, productId, onClick, price, cartId}) => {

  const [value, setValue] = useState(dataValue??1)

  const handleAdd = () => {
    setValue(Number(value) +1)
  }

  const handleMinus = () => {
    setValue(Number(value) -1)
  }

  useEffect(() => {
    localStorage.setItem(`quantity/product/${productId}`, value)
    if(cartId) {
      axios.get(`/api/cart-user/update-quality`, {
        params: {
          cart_id: cartId,
          quality: value
        }
      })
    }
  }, [value])

  return (
    <div className="quantity">
      <button data-price={price} data-value={value-1} onClick={(e) => ([handleMinus(), onClick(e)])}>-</button>
      <TextField type="number" value={value} onChange={ (e) => setValue(e.target.value) } variant="standard" sx={{ textAlign: 'center' }} />
      <button data-price={price} data-value={value+1} onClick={(e) => ([handleAdd(), onClick(e)])}>+</button>
    </div>
  )
}

export default Quantity;