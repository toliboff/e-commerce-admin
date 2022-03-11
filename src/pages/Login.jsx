import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { login } from '../redux/api';

const Container = styled.div`
  flex:4;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    login(dispatch, {username, password})
  }

  return (
    <Container>
      <input type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
      <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleClick}> Login </button>
    </Container>
  )
}

export default Login