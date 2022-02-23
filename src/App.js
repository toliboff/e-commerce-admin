import Topbar from "./Components/topbar/Topbar";
import styled  from 'styled-components';
import Sidebar from "./Components/Sidebar";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <div className="App">
      <Topbar />
      <Container>
      <Sidebar />
      </Container>
    </div>
  );
}

export default App;
