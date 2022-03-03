import { Button, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 4;
`;

const Title = styled.h2``;
const  Form = styled.form`
  margin: 25px;
`;
const  InputContainer = styled.div`
  display: flex;
  gap: 25px;
`;
const  Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;

`;
const  Right = styled.div`
flex: 1;
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
const NewUser = () => {
  const [age, setAge] = React.useState('');

  const handleSelect = (event) => {
    setAge(event.target.value);
  };

  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

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
            <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={'value'}
              onChange={handleChange}
              row
            >
              <FormControlLabel value="female" control={<Radio {...controlProps('female')} size='small'/>} label="Female" />
              <FormControlLabel value="male" control={<Radio  {...controlProps('male')} size='small' />} label="Male" />
            </RadioGroup>
          </Left>
          <Right>
            <Label>Full Name</Label>
            <Input type='text' />
            <Label>Password</Label>
            <Input type='text' />
            <Label>Address</Label>
            <Input type='text' />
            <InputLabel id="demo-simple-select-label">Active</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Active"
              onChange={handleSelect}
            >
              <MenuItem value='Yes'>Yes</MenuItem>
              <MenuItem value='No'>No</MenuItem>
      
            </Select>

          </Right>
        </InputContainer>
        <Button variant='contained'>Create</Button>
      </Form>
    </Container>
  )
}

export default NewUser