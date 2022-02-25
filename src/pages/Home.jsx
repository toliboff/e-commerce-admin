import React from 'react'
import styled from 'styled-components';
import FeaturedInfo from '../Components/FeaturedInfo';
import Chart from '../Components/Chart';
import { userData } from '../data';

const Container = styled.div`
  flex: 4;
  padding: 10px;
`;

const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart data={userData} dataKey='uv' columnName='name' />
    </Container>
  )
}

export default Home