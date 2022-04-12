import { memo } from "react"
import Box from "@mui/material/Box";
import { Product } from "../Home/LastestProducts";
import { useEffect, useState } from "react";
import axios from "axios";

const SimilarProducts = (props) => {
  const [relateProducts, setRelateProducts] = useState([])

  useEffect(() => {
    axios.get('/api/products/relate-products', {
      categoryId: props.category
    })
    .then((response) => setRelateProducts(response.data))
  }, [])

  return (
    <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: {
        lg: '1fr 1fr 1fr 1fr'
      },
      gap: 0,
      p: 0
    }}
    >

    </Box>
  )
}

export default memo(SimilarProducts)