import React, { useState, useEffect } from 'react';
import {
  DataGrid,
  GridActionsCellItem
} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

export default function Products() {
  const [products, setProducts] = useState([])
  

  const columns = [
    { field: 'id', headerName: 'id' },
    { field: 'code', headerName: 'code' },
    { field: 'name' },
    { field: 'description' },
    { field: 'category_id' },
    { field: 'price' },
    { field: 'is_top' },
    { field: 'on_sale' },  
    {
      field: 'actions',
      type: 'actions',
      width: 100,
      renderCell: (params) => (
        <>
      <GridActionsCellItem icon={<EditIcon />} label="Edit" />
      <GridActionsCellItem  onClick={()=>handleDeleteProduct(params)} icon={<DeleteIcon />} label="Delete" />
      <GridActionsCellItem onClick={()=>handleSetOnTop(params)} icon={<span className={params['row']['is_top'] == 1 ? 'button-top-on' : 'button-top-off' }>Top</span>} label="Top" />
        </>
      )
    },
  ];


  const [loading, setLoading] = useState(false)

  const handleSetOnTop = (params) => {
    axios.get('/api/products/ontop/' + params.id, {
      headers: {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).access_token
      }
    })
    setLoading(!loading)
  }

  const handleDeleteProduct = (params) => {
    axios.delete('/api/products/' + params.id, {
      headers: {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).access_token
      }
    }).then(response => console.log(response.data))
    setLoading(!loading)
    alert('Product deleted successfully')
  }

  useEffect(() => {
    axios.get('/api/products')
    .then(response => setProducts([...response.data]))
  }, [loading])

  const [pageSize, setPageSize] = React.useState(10);

  return (
    <div style={{ height: '700px', width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 20]}
        pagination
        pageSize={pageSize}
        sx= {{
          '& .MuiDataGrid-cell:focus': {
            border: 'none',
            outline: 'unset'
          },
          '& .MuiDataGrid-cell:focus-within': {
            border: 'none',
            outline: 'unset'
          }
        }}
      />
    </div>
  );
}