import { Upload } from '@mui/icons-material';
import { Button, MenuItem, Select, TextField } from '@mui/material';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Chart from '../Components/Chart';
import { productData } from '../data';

const Container = styled.div`
  flex: 4;
  padding: 10px;
  // display: flex;
  // flex-direction: column;
  // border: 1px solid;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title =styled.h2`

`;
const ProductContainer = styled.div`

`;
const ProductTop = styled.div`
  display: flex;
  gap: 25px;
`;

const ProductTopLeft = styled.div`
  flex: 1;
  margin: 25px 0;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 0 0 15px -5px #aaa;
`;

const ProductTopRight = styled.div`
  flex: 1;
  margin: 25px 0;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 0 0 15px -5px #aaa;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  
`;
const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;

`;
const ProductName = styled.span`
  font-weight: 700;
`;
const ProductStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;
`;
const ProductDetails = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;
const ProductKey = styled.span``;
const ProductValue = styled.span`
  font-weight: 300;
  color: #555;
`;
const ProductBottom = styled.div`
  flex: 1;
  margin: 25px 0;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 0 0 15px -5px #aaa;
`;

const ProductForm = styled.form`
  display: flex;
  justify-content: space-between;
`;
const EditLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  margin: 25px 0 5px;
`;
const EditRight = styled.div`
  padding: 15px;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
`;
const FileInput = styled.input`
  display: none;
`;


const Product = () => {
const [active, setActive] =useState('')
const [stock, setStock] =useState('')

const handleStockStatus = (event) => {
  setStock(event.target.value)
}

const handleActiveStatus = (event) => {
  setActive(event.target.value)
}
  return (
    <Container>
    <Top>
      <Title>Product Name</Title>
      <Link to='/newProduct'>
      <Button variant='contained'>
        Create
      </Button>
      </Link>
    </Top>
      <ProductContainer>
        <ProductTop>
          <ProductTopLeft>
           
            <Chart data={productData} dataKey='sales' columnName='name' title='Sales Performance' />
          </ProductTopLeft>
          <ProductTopRight>
            <ProductInfo>
              <ProductImage src='https://assets.crowdspring.com/marketing/landing-page/crowdspring-product-design-phase1-1120.jpg'/>
              <ProductName>Coffee Cup</ProductName>
            </ProductInfo>
            <ProductStats>
              <ProductDetails>
                <ProductKey>id:</ProductKey>
                <ProductValue>123</ProductValue>
              </ProductDetails>
              <ProductDetails>
                <ProductKey>sales:</ProductKey>
                <ProductValue>553</ProductValue>
              </ProductDetails>
              <ProductDetails>
                <ProductKey>active:</ProductKey>
                <ProductValue>yes</ProductValue>
              </ProductDetails>
              <ProductDetails>
                <ProductKey>in stock:</ProductKey>
                <ProductValue>no</ProductValue>
              </ProductDetails>
            </ProductStats>
          </ProductTopRight>
        </ProductTop>
        <ProductBottom>
        <ProductForm>
          <EditLeft>
              <Label>Product name</Label>
              <TextField id="standard-basic" variant="standard" placeholder='Coffee Cup'/>
              <Label>In Stock</Label>
              <Select
                value={stock}
                onChange={handleStockStatus}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                >
                <MenuItem value='Yes'>Yes</MenuItem>
                <MenuItem value='No'>No</MenuItem>
              </Select>

              <Label>Active</Label>
              <Select
                value={active}
                onChange={handleActiveStatus}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                >
                <MenuItem value='Yes'>Yes</MenuItem>
                <MenuItem value='No'>No</MenuItem>
              </Select>
            </EditLeft>
            <EditRight>
              <ImageContainer>
                <ProductImg src='https://iheartcraftythings.com/wp-content/uploads/2021/04/Man-DRAWING-%E2%80%93-STEP-10.jpg' />
                <Label htmlFor='file'><Upload sx={{cursor: 'pointer', color: 'gray', fontSize: '3rem'}}/></Label>
                <FileInput type='file' id='file'/>
              </ImageContainer>
              
              <Button variant='contained' color='success' sx={{alignSelf: 'flex-end', margin:'10px', width: '90%', marginTop: '20px'}}>Update</Button>
            </EditRight>
          </ProductForm>
        </ProductBottom>
      </ProductContainer>
   
    

    </Container>
  )
}

export default Product