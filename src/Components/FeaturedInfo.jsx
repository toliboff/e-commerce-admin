import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 25px;
`;

const Item = styled.div`
  flex: 1;
  margin: 25px 0;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 0 0 15px -5px #aaa;
`;
const Title = styled.h2`
  font-weight: 400;
`;

const MoneyContainer = styled.div`
  display:flex;
  align-items: center; 
  margin: 15px 0; 
`;
const Money = styled.span`
  font-size: 26px;
  font-weight: 700;
  margin-right: auto;
`;
const MoneyRate = styled.span`
  margin: 0 5px;
`;
const UpArrow = styled(ArrowUpward)`
  color: green;
`
const DownArrow = styled(ArrowDownward)`
  color: red;
`
const Info = styled.span`
  color: #ccc;
  font-wight: 200;
  font-size: 0.8rem;
`;
 
const FeaturedInfo = () => {
  return (
    <Container>
      <Item>
        <Title>Revenue</Title>
        <MoneyContainer>
          <Money>$2,145</Money>
          <MoneyRate>-11.4 </MoneyRate>
          <DownArrow />
        </MoneyContainer>
        <Info>Compared to last month</Info>
      </Item>
      <Item>
        <Title>Sales</Title>
        <MoneyContainer>
          <Money>$12,345</Money>
          <MoneyRate>-12.3 </MoneyRate>
          <DownArrow />
        </MoneyContainer>
        <Info>Compared to last month</Info>
      </Item>
      <Item>
        <Title>Cost</Title>
        <MoneyContainer>
          <Money>$3,456</Money>
          <MoneyRate>+12.3 </MoneyRate>
          <UpArrow />
        </MoneyContainer>
        <Info>Compared to last month</Info>
      </Item>
    </Container>
  )
}

export default FeaturedInfo