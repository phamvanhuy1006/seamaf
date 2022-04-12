import React from 'react';
import { Box } from '@mui/material';
import BasicSelect from '../Component/BasicSelect';
import axios from 'axios';

import './add_product.scss';

const AddProduct = () => {

  const [name, setName] = React.useState('')
  const [price, setPrice] = React.useState(0)
  const [description, setDescription] = React.useState('')
  const [categories, setCategories] = React.useState(0)
  const [categoryId, setCategoryId] = React.useState(0)
  const [code, setCode] = React.useState('')
  const [imageFile, setImageFile] = React.useState()

  React.useEffect(() => {
    axios.get('/api/categories')
    .then((response) => setCategories(response.data))
  }, [])

  const handleCategory = (e) => {
    setCategoryId(e.target.getAttribute('data-value'))
  }

  const uploadFile = (e) => {
    const files = e.target.files
    setImageFile(files[0])
  }

  const handleCreate = () => {
    const dataForm = new FormData()
    
    dataForm.append('image', imageFile)
    dataForm.append('name', name)
    dataForm.append('price', price)
    dataForm.append('category_id', categoryId)
    dataForm.append('description', description)
    dataForm.append('code', code)

    axios({
      url: `/api/products/`, 
      method: "PUT",
      headers: {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).access_token,
        "Content-Type": "multipart/form-data",
      },
      data: dataForm
    })
  }

  return (
    <div className="add-product">
      <div>Product infomation</div>
      <div>
        <input onChange={e => setName(e.target.value)} className="input-product-name" type="text" placeholder="Product's name" />
      </div>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
           lg: '1fr 1fr 1fr', 
          },
          gap: 6,
        }}
      >
        <input onChange={e => setPrice(e.target.value)} type="number" placeholder="Price" />
        <input onChange={e => setCode(e.target.value)} type="text" placeholder="code" />
        <BasicSelect b={categoryId} onClick={handleCategory} categories={categories} />
      </Box>
      <input onChange={e => uploadFile(e)} className="input-img" type="file"/>

      <div>
      <textarea onChange={e => setDescription(e.target.value)}placeholder="Description"/>
      </div>
      <p className="btn-create"><button onClick={handleCreate} className="button">Create</button></p>
    </div>
)
}

export default AddProduct