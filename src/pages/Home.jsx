import React from 'react'
import styled from 'styled-components';
import FeaturedInfo from '../Components/FeaturedInfo';

const Container = styled.div`
  background #ccc;
  flex: 1;
`;

const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
    </Container>
  )
}

export default Home