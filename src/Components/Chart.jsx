import React from 'react'
import styled from 'styled-components';
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, YAxis } from 'recharts';


const Container = styled.div`
  box-shadow: 0 0 15px -5px #aaa;
  border-radius: 10px;
  padding: 15px; 
`;

const Title = styled.h2`
  margin: 15px 0; 
  font-size: 20px;
`;

const ChartWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
const Chart = ({data, dataKey, columnName}) => {
  return (
    <Container>
      <Title>Active User Details</Title>
      <ChartWrapper>
        <LineChart width={1000} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
        <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey={columnName} />
        <YAxis />
        <Tooltip /> 
      </LineChart>
      </ChartWrapper>
    </Container>
  )
}

export default Chart