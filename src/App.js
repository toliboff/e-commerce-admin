import Topbar from "./Components/Topbar";
import styled  from 'styled-components';
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <div className="App">
       <Router>
      <Topbar />
      <Container>
        <Sidebar />
       
          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/newUser' element = {<NewUser />} />
            <Route path='/users' element = {<UserList />} />
            <Route path='/user/:userId' element = {<User />} />
          </Routes>
       
    
      </Container>
      </Router>
    </div>
  );
}

export default App;
