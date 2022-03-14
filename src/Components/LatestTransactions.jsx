import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper }  from '@mui/material';
import { userRequest } from '../requestMethods';
import {format} from 'timeago.js';

const Container = styled.div`
  box-shadow: 0 0 15px -5px #aaa;
  border-radius: 10px;
  padding: 15px; 
  flex: 3;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 25px;
`;

const CustomerImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const statusColor = {
  Approved: 'green',
  Rejected: 'red',
  Pending: 'gray',
}

const TransactionStatus = styled.span`
  color: ${({status})=> statusColor[status]}
`;

const LatestTransactions = () => {
  const [transactions, setsetTransactions] = useState([]);
  useEffect(()=>{
    const getOrders = async()=>{
      try{
        const res = await userRequest.get('orders');
        setsetTransactions(res.data);
      } catch {
        console.log('Failed to fetch orders');
      }

    }
    getOrders();
  },[])
    
  return (
    <Container>
      <Title>Latest Transactions</Title>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) =>
            <TableRow key={transaction._id}>
              <TableCell sx={{display:'flex', alignItems:'center', gap: '5px' }}>
                
                {transaction.userId}
              </TableCell>
              <TableCell>{format(transaction.createdAt)}</TableCell>
              <TableCell>${transaction.amount}</TableCell>
              <TableCell>
                <TransactionStatus status={transaction.status}>
                  {transaction.status}
                  </TransactionStatus>
                </TableCell>
             
                
            </TableRow>
            )}
          </TableBody>
        </Table>

      </TableContainer>
    </Container>
  )
}

export default LatestTransactions