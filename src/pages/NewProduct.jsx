import { Button, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 4;
`;

const Title = styled.h2``;
const  Form = styled.form`
  margin: 25px 0;
`;
const  InputContainer = styled.div`
  display: flex;
  gap: 25px;
`;
const  Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const  Label = styled.label`
  color: #555;
`;

const  Input = styled.input`
  margin: 10px 0;
  padding: 10px 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  &:focus{
     border: 1px solid lightblue;
  }
`;

const File = styled.input`
  margin: 15px 0;
`;

const NewProduct = () => {
  const [active, setActive] = React.useState('');

  const handleSelect = (event) => {
    setActive(event.target.value);
  };

  return (
    <Container>
      <Title>New Product </Title>
      <Form>
        <InputContainer>
          <Left>
            <Label>Image</Label>
            <File type="file"/>
            <Label>Name</Label>
            <Input type="text"/>
            <Label>Stock</Label>
            <Input type='text' />
            <InputLabel id="demo-simple-select-label">Active</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={active}
              onChange={handleSelect}
              sx={{marginBottom: '15px'}}
            >
              <MenuItem value='Yes'>Yes</MenuItem>
              <MenuItem value='No'>No</MenuItem>
      
            </Select>
          </Left>
          
        </InputContainer>
        <Button variant='contained'>Create</Button>
      </Form>
    </Container>
  )
}

export default NewProduct