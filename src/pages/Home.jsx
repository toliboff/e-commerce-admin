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

const Widgets = styled.div`
  display: flex;
  gap: 15px;
  margin: 15px 0;
`;
const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart data={userData} dataKey='uv' columnName='name' />
      <Widgets>
        <NewMembers members={members}/>
        <LatestTransactions transactions={transactions}/>
      </Widgets>
    </Container>
  )
}

export default Home