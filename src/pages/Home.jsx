import React from 'react'
import styled from 'styled-components';
import FeaturedInfo from '../Components/FeaturedInfo';
import Chart from '../Components/Chart';
import { members, transactions, userData } from '../data';
import NewMembers from '../Components/NewMembers';
import LatestTransactions from '../Components/LatestTransactions';

const Container = styled.div`
  flex: 4;
  padding: 10px;
`;

const ChartContainer = styled.div`
  box-shadow: 0 0 15px -5px #aaa;
  border-radius: 10px;
  padding: 15px;
`;

const Widgets = styled.div`
  display: flex;
  gap: 15px;
  margin: 15px 0;
`;
const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <ChartContainer>
        <Chart data={userData} dataKey='uv' columnName='name' grid/>
      </ChartContainer>
      
      <Widgets>
        <NewMembers members={members}/>
        <LatestTransactions transactions={transactions}/>
      </Widgets>
    </Container>
  )
}

export default Home