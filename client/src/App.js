import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProdactList from './pages/ProdactList';
import Product from './pages/Product';
import Register from './pages/Register';
import './styles/App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route 
          path='/login' 
          element = {user ? <Navigate replace to = '/'/> : <Login/>}
        />
        <Route 
          path='/register' 
          element = {user ? <Navigate replace to = '/'/> : <Register/>}
        />
        <Route path='/products/:category' element={<ProdactList/>}/>
        <Route path='/product/:id' element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
