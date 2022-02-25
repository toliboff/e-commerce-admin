import React from 'react'
import styled from 'styled-components';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Button, IconButton } from '@mui/material';
import { Delete, DeleteOutline, Edit } from '@mui/icons-material';
import { userRows } from '../data';
import { Link } from 'react-router-dom';


const Container = styled.div`
  flex: 4;
  padding: 10px;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
`;

const rows: GridRowsProp = userRows;

const columns: GridColDef[] = [
  { field: 'id', headerName: 'id', width: 70 },
  { field: 'user', headerName: 'Username', width: 200, renderCell: (params) => <>
    <UserImage src = {params.row.avatar} alt=''/>
    {params.row.username}
  </> },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'status', headerName: 'Status', width: 100 },
  { field: 'transaction', headerName: 'Transactions', width: 150 },
  { field: 'action', headerName: 'Actions', width: 250, renderCell: (params) => <>
    <Link to={'/user/'+params.row.id}>
      <IconButton color="primary">
        <Edit/>
      </IconButton> 
    </Link>
    <IconButton color="secondary">
      <DeleteOutline />
    </IconButton >
  </> },
];

const UserList = () => {
  return (
    <Container>
      <DataGrid rows={rows} columns={columns} checkboxSelection disableSelectionOnClick/>
    </Container>
  )
}

export default UserList