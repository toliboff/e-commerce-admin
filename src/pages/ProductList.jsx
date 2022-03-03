import React from 'react';
import styled from 'styled-components';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Button, IconButton } from '@mui/material';
import { Delete, DeleteOutline, Edit } from '@mui/icons-material';
import { products as productRows} from '../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`
  flex: 4;
`;

const ProductImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
`;

const ProductList = () => {
  const [products, setProducts] = useState(productRows)
  const handleDelete = (id) => {
    setProducts(state => state.filter(product => product.id !== id))
  }
  const rows: GridRowsProp = products;

const columns: GridColDef[] = [
  { field: 'id', headerName: 'id', width: 70 },
  { field: 'product', headerName: 'Name', width: 200, renderCell: (params) => <>
    <ProductImage src = {params.row.image} alt=''/>
    {params.row.name}
  </> },
  { field: 'stock', headerName: 'Stock', width: 200 },
  { field: 'status', headerName: 'Status', width: 100 },
  { field: 'price', headerName: 'Price', width: 150 },
  { field: 'action', headerName: 'Actions', width: 250, renderCell: (params) => <>
    <Link to={'/product/'+params.row.id}>
      <IconButton color="primary">
        <Edit/>
      </IconButton> 
    </Link>
    <IconButton color="secondary">
      <DeleteOutline onClick={()=>handleDelete(params.row.id)}/>
    </IconButton >
  </> },
];
  return (
    <Container>
      <DataGrid rows={rows} columns={columns} checkboxSelection disableSelectionOnClick/>
    </Container>
  )
}

export default ProductList