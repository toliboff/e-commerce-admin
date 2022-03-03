import { AttachMoneyOutlined, ForumOutlined, LineStyle, MailOutline, MessageOutlined, PersonOutline, ReportOutlined, SignalCellularAltOutlined, StorefrontOutlined, Timeline, TrendingUp, WorkOutlineOutlined } from '@mui/icons-material';
import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const SidebarWrapper  = styled.div`
  flex: 1;
  height: calc(100vh - 55px);
`;

const Title = styled.h2`
  font-size: 18px;
  color: #444;
`
const SidebarMenu = styled.div`
  margin-bottom: 15px;
`
const SidebarList = styled.ul`
  list-style: none;
  padding-left: 10px;
`
const SidebarItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #555;
`

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarMenu>
        <Title>Dashboard</Title>
        <SidebarList>
          <Link to='/'>
            <SidebarItem> <LineStyle /> Home </SidebarItem>
          </Link>
        </SidebarList>
        <SidebarList>
          <SidebarItem> <Timeline /> Analytics </SidebarItem>
        </SidebarList>
        <SidebarList>
          <SidebarItem> <TrendingUp /> Sales </SidebarItem>
        </SidebarList>
      </SidebarMenu>
 
      <SidebarMenu>
        <Title>Quick Menu</Title>
        <SidebarList>
          <Link to='/users'>
            <SidebarItem> <PersonOutline /> Users </SidebarItem>
          </Link>
        </SidebarList>
        <SidebarList>
          <Link to='/products'>
            <SidebarItem> <StorefrontOutlined /> Products </SidebarItem>
          </Link>
        </SidebarList>
        <SidebarList>
          <SidebarItem> <AttachMoneyOutlined /> Transactions </SidebarItem>
        </SidebarList>
        <SidebarList>
          <SidebarItem> <SignalCellularAltOutlined /> Reports </SidebarItem>
        </SidebarList>
      </SidebarMenu>

      <SidebarMenu>
        <Title>Notifications</Title>
        <SidebarList>
          <SidebarItem> <MailOutline /> Mail </SidebarItem>
        </SidebarList>
        <SidebarList>
          <SidebarItem> <ForumOutlined /> Feedback </SidebarItem>
        </SidebarList>
        <SidebarList>
          <SidebarItem> <MessageOutlined /> Messages </SidebarItem>
        </SidebarList>
      </SidebarMenu>

      <SidebarMenu>
        <Title>Staff</Title>
        <SidebarList>
          <SidebarItem> <WorkOutlineOutlined /> Manage </SidebarItem>
        </SidebarList>
        <SidebarList>
          <SidebarItem> <Timeline /> Analytics </SidebarItem>
        </SidebarList>
        <SidebarList>
          <SidebarItem> <ReportOutlined /> Reports </SidebarItem>
        </SidebarList>
      </SidebarMenu>

    </SidebarWrapper>
  )
}

export default Sidebar