import { Visibility } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
  box-shadow: 0 0 15px -5px #aaa;
  border-radius: 10px;
  padding: 15px; 
  flex: 1;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
`
const MemberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;
const MemberImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const MemberName = styled.span`
  font-weight: 700;
`;
const MemberPosition = styled.span`
  font-weight: 300;
  color: #ccc;
  font-size: 0.8rem;
`;
const DisplayButton = styled.button`
  border: none;
  border-radius: 15px;
  display:flex;
  gap: 5px;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  font-size: 0.8rem;
`;

const NewMembers = ({members}) => {
  return (
    <Container>
      <Title>New Joined Members</Title>
      {
        members.map((member) => <MemberWrapper>
        <MemberImage src="https://pickaface.net/gallery/avatar/unr_coder_181014_0458_34tnm.png"/>
        <MemberInfo>
          <MemberName>{member.name}</MemberName>
          <MemberPosition>{member.position}</MemberPosition>
        </MemberInfo>
        <DisplayButton><Visibility /> Display</DisplayButton>
      </MemberWrapper>)
      }
      
    </Container>

  )
}

export default NewMembers