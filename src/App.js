import Topbar from "./Components/Topbar";
import styled  from 'styled-components';
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import Home from "./pages/Home";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <div className="App">
      <Topbar />
      <Container>
        <Sidebar />
        <Home />
      </Container>
    </div>
  );
}

export default App;
