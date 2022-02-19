import styled  from 'styled-components'
import React from 'react'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  
`
const Right = styled.div`
  
`

const Topbar = () => {
  return (
    <Container>
      <Left>Left</Left>
      <Right>Right</Right>
      
    </Container>
  )
}

export default Topbar