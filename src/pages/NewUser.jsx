import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 4;
`;

const Title = styled.h2``;
const  Form = styled.form``;
const  InputContainer = styled.div`
  display: flex;
`;
const  Left = styled.div`
display: flex;
flex-direction: column;
`;
const  Right = styled.div`
display: flex;
flex-direction: column;
`;
const  Label = styled.label``;
const  Input = styled.input``;
const NewUser = () => {
  return (
    <Container>
      <Title>Create User </Title>
      <Form>
        <InputContainer>
          <Left>
            <Label>Username</Label>
            <Input type='text' />
            <Label>Email</Label>
            <Input type='email' />
            <Label>Phone</Label>
            <Input type='tel' />
          </Left>
          <Right>
            <Label>Full Name</Label>
            <Input type='text' />
            <Label>Password</Label>
            <Input type='text' />
            <Label>Address</Label>
            <Input type='text' />
            <Label>Active</Label>
            <Input type='text' />

          </Right>
        </InputContainer>
      </Form>
    </Container>
  )
}

export default NewUser