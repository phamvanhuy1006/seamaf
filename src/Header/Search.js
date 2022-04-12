import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Header.scss';

export default function Search() {

  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
    axios.get('/api/products/top-selling')
      .then((response) => setProducts(response.data))
  }, [])
  // console.log(products)

  const removeOption = () => {

  }

  return (
    <Stack spacing={2} sx={{ width: '100%'}}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={products}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} sx={{
          position: "relative",
          borderRadius: "20px",
          backgroundColor: "#ccc",
          marginRight: '15px',
          marginLeft: 0,
          width: "100%",
        }} placeholder={'Search on RVM SeaMaf ....'}/>}
        renderOption={(props, option) => {
          return ([<div key={option.id} className="link-search"> <Link sx={{ width: '100%%' }} to={`/product/${option.id}`}>{option.name}</Link><hr></hr></div>])
        }}
      />
    </Stack>
  );
}
