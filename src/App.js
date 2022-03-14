import Topbar from "./Components/Topbar";
import styled  from 'styled-components';
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Login from "./pages/Login";

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
            <Route path='/login' element = {<Login />} />
            <Route path='/newUser' element = {<NewUser />} />
            <Route path='/users' element = {<UserList />} />
            <Route path='/user/:userId' element = {<User />} />
            <Route path='/products' element = {<ProductList />} />
            <Route path='/product/:productId' element = {<Product />} />
            <Route path='/newProduct' element = {<NewProduct />} />
          </Routes>
       
    
      </Container>
      </Router>
    </div>
  );
}

export default App;
