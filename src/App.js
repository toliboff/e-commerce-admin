import Topbar from "./Components/topbar/Topbar";
import styled  from 'styled-components';
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <div className="App">
      <Topbar />
      <Container>
        <Sidebar />
        <Content />
      </Container>
    </div>
  );
}

export default App;
