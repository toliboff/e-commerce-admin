import styled  from 'styled-components'
import  { LanguageOutlined, NotificationsNone, SettingsOutlined } from '@mui/icons-material';
import React from 'react'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: sticky;
  top: 0;
  background-color: #fff;
`;
const Left = styled.div`
  
`;

const Logo = styled.span`
  color: teal;
  font-weight: 700;
  cursor: pointer;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;  
  color: #555;
  cursor: pointer;
`;

const TopbarIconContainer = styled.div`
  position: relative;
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  font-size: 10px;
  background-color: red;
  color: #fff;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Avatar = styled.img`
  border-radius: 50%;
  width:30px;
  height: 30px;
  border: 1px solid #ccc;
`;

const Topbar = () => {
  return (
    <Container>
      <Left>
        <Logo>AmazingAdmin</Logo>
      </Left>
      <Right>
        <TopbarIconContainer>
          <NotificationsNone />
          <NotificationBadge>2</NotificationBadge>
        </TopbarIconContainer>
        <TopbarIconContainer>
          <LanguageOutlined />
          <NotificationBadge>2</NotificationBadge>
        </TopbarIconContainer>
        <TopbarIconContainer>
          <SettingsOutlined />
          <NotificationBadge>2</NotificationBadge>
        </TopbarIconContainer>
        <Avatar src='https://image.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg'/>
      </Right>
      
    </Container>
  )
}

export default Topbar