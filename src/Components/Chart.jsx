import React from 'react'
import styled from 'styled-components';
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, YAxis, ResponsiveContainer } from 'recharts';


const Container = styled.div`
  
`;

const Title = styled.h2`
  margin: 15px 0; 
  font-size: 20px;
`;

const Chart = ({data, dataKey, columnName, title, grid, yaxis}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ResponsiveContainer width="100%" aspect={ 4/ 1}>
        <LineChart width={1000} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
        <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
        {grid && <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />}
        <XAxis dataKey={columnName} />
        {yaxis && <YAxis /> }
        <Tooltip /> 
      </LineChart>
      </ResponsiveContainer>
    </Container>
  )
}

export default Chart