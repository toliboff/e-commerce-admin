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

const Title =styled.h2``;

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
const EditUserInfo = styled.div`
  flex: 3;
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

const UpdateContainer= styled.div``;
const Label = styled.label``;
const Input = styled.input``;

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
        <EditUserInfo>
          Edit user info
        </EditUserInfo>
      </UserContainer>

      <UpdateContainer>
        <EditLeft>
            <Title>Edit</Title>
            <Label>Username</Label>
            <Input type='text' />
            <Label>Full name</Label>
            <Input type='text' />
            <Label>Email</Label>
            <Input type='email' />
            <Label>Phone</Label>
            <Input type='tel' />
            <Label>Adress</Label>
            <Input type='text' />
        </EditLeft>
        <EditRight>
          <Image src='' />
          <Upload />
          <Button>Update</Button>
        </EditRight>
      </UpdateContainer>
    </Container>
  )
}

export default User