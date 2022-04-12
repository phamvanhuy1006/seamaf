import React, { useState, useEffect } from 'react';
import {
  DataGrid,
  GridActionsCellItem
} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

export default function Categories() {
  const [categories, setCategories] = useState([])

  const columns = [
    { field: 'id', headerName: 'id' },
    { field: 'name', headerName: 'name' },
    {
      field: 'actions',
      type: 'actions',
      width: 100,
      renderCell: (params) => (
        <>
      <GridActionsCellItem icon={<EditIcon />} label="Edit" />
      <GridActionsCellItem  onClick={()=>handleDeleteProduct(params)} icon={<DeleteIcon />} label="Delete" />       
        </>
      )
    },
  ];

  const [loading, setLoading] = useState()

  const handleDeleteProduct = (params) => {
    axios.get('/api/products/delete/' + params.id)
    setLoading(params.id)
    alert('Categories deleted successfully')
  }
    

  useEffect(() => {
    axios.get('/api/categories')
    .then(response => setCategories([...response.data]))
  }, [loading])


  return (
    <div style={{ height: '700px', width: '100%' }}>
      <DataGrid
        rows={categories}
        columns={columns}
        onSelectionChange={(newSelection) => {
      }}
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