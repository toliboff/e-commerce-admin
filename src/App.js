import Topbar from "./Components/Topbar";
import styled  from 'styled-components';
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/UserList";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <div className="App">
      <Topbar />
      <Container>
        <Sidebar />
        <Router>
          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/users' element = {<UserList />} />
          </Routes>
        </Router>
    
      </Container>
    </div>
  );
}

export default App;
