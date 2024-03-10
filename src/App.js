import './App.css';
import { Footer } from './Component/Footer/Footer';
import Home from './Component/Homepage/Home';
import Mainheader from './Component/Mainheader/Mainheader'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Men from './Component/Men';
import Women from './Component/Women';
import Kid from './Component/Kid';
import Login from './Component/Login';
import Cart from './Component/Cart';
import Account from './Component/Account';
import Product from './Component/Product';


function App() {
  return (
    <>
    <BrowserRouter>
    <Mainheader/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route index element={<Home/>}/>
        <Route path='/men' element={<Men/>}/>
          <Route path='/product:Id' element={<Product/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/kid' element={<Kid/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/account' element={<Account/>}/>


      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
