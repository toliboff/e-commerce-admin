import React from 'react'
import styled from 'styled-components';
import FeaturedInfo from '../Components/FeaturedInfo';

const Container = styled.div`
  flex: 4;
  padding: 10px;
`;

const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
    </Container>
  )
}

export default Home