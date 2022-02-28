import React from 'react'
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { userRows } from '../data';
import { Button } from '@mui/material';
import { CalendarTodayOutlined, LocationOnOutlined, MailOutline, PersonOutline, PhoneAndroid, Upload } from '@mui/icons-material';

const Container = styled.div`
  flex: 4;
  padding: 10px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title =styled.h2`
`;

const UserContainer = styled.div`
  display: flex;
  padding: 15px;
  gap: 25px;
`;

const UserInfo = styled.div`
  flex: 1;
  border-radius: 5px;
  box-shadow: 0 0 15px -5px #aaa;
  padding: 10px;
`;


const FlexContainer = styled.div`
  display: flex;
`;
const UserImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
const Username = styled.div`
  font-weight: 700;

`;
const UserPosition = styled.div`
  display: flex;
  font-size:0.8rem;
  color: #aaa;
`;
const Subtitle = styled.h3`
  font-size:0.8rem;
  margin: 15px 0;
  font-weight: 400;
  color: #888
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 5px;
  color: #555;
`;
const Data = styled.span`
  margin-left: 10px;
`;


const UpdateContainer= styled.div`
  flex: 3;
  border-radius: 5px;
  box-shadow: 0 0 15px -5px #aaa;
  padding: 10px;
`;

const UserForm = styled.div`
  display: flex;
  gap: 25px;
`;
const EditLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const EditRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  `;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  box-shadow: 0 0 9px 5px #ccc;
`;
const Label = styled.label``;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 5px;
  margin: 10px 0 20px;
  outline: none;
  font-size: 16px;
  display: ${props=>props.type==='file'?'none':'block'}
`;

const User = () => {
  const location = useLocation();
  // User {location.pathname.split('/')[2]}
  return (
    <Container>
      <Top>
        <Title>Edit User</Title>
        <Button variant='contained'>
          Create
        </Button>
      </Top>
      <UserContainer>
        <UserInfo>
          <FlexContainer>
            <UserImage src='https://findicons.com/files/icons/61/dragon_soft/256/user.png' />
            <Info>
              <Username>Jack London</Username>
              <UserPosition>Software Engineer</UserPosition>
            </Info>
          </FlexContainer>
          <Subtitle>
            Account Details
          </Subtitle>
          <Details>
            <PersonOutline />
            <Data>jack007</Data>
          </Details>
          <Details>
            <CalendarTodayOutlined />
            <Data>10.12.2001</Data>
          </Details>

          <Subtitle>Contact details</Subtitle>
          <Details>
            <PhoneAndroid />
            <Data>+ 1 123 456 78</Data>
          </Details>
          <Details>
            <MailOutline />
            <Data>jack007@mail.com</Data>
          </Details>
          <Details>
            <LocationOnOutlined />
            <Data>CityName | CountryName</Data>
          </Details>
        </UserInfo>

        <UpdateContainer>
             <Title>Edit</Title>
          <UserForm>
            <EditLeft>
              <Label>Username</Label>
              <Input type='text' placeholder='jack007'/>
              <Label>Full name</Label>
              <Input type='text' placeholder='Jack London' />
              <Label>Email</Label>
              <Input type='email' placeholder='jack007@mail.com' />
              <Label>Phone</Label>
              <Input type='tel' placeholder='+1 123 456 78'/>
              <Label>Adress</Label>
              <Input type='text' placeholder='City name'/>
            </EditLeft>
            <EditRight>
              <ImageContainer>
                <ProfileImage src='https://iheartcraftythings.com/wp-content/uploads/2021/04/Man-DRAWING-%E2%80%93-STEP-10.jpg' />
                <Label htmlFor='file'><Upload sx={{cursor: 'pointer', color: 'gray', fontSize: '3rem'}}/></Label>
                <Input type='file' id='file'/>
              </ImageContainer>
              
              <Button variant='contained' color='success' sx={{alignSelf: 'flex-end', margin:'10px'}}>Update</Button>
            </EditRight>
          </UserForm>
        </UpdateContainer>  
      </UserContainer>
    </Container>
  )
}

export default User