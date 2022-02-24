import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`

`;

const Item = styled.div``;
const Title = styled.h2``;
const MoneyContainer = styled.div``;
const Money = styled.div``;
const MoneyRate = styled.div``;
const Info = styled.span``;
 
const FeaturedInfo = () => {
  return (
    <Container>
      <Item>
        <Title>Revenue</Title>
        <MoneyContainer>
          <Money>$ 2.145</Money>
          <MoneyRate>-11.4 <ArrowDownward /></MoneyRate>
        </MoneyContainer>
        <Info>Compared to last month</Info>
      </Item>
      <Item>
        <Title>Sales</Title>
        <MoneyContainer>
          <Money>$ 12.345</Money>
          <MoneyRate>-12.3 <ArrowDownward /></MoneyRate>
        </MoneyContainer>
        <Info>Compared to last month</Info>
      </Item>
      <Item>
        <Title>Cost</Title>
        <MoneyContainer>
          <Money>$ 3.456</Money>
          <MoneyRate>+12.3 <ArrowUpward /></MoneyRate>
        </MoneyContainer>
        <Info>Compared to last month</Info>
      </Item>
    </Container>
  )
}

export default FeaturedInfo