import React, { useState } from 'react';
import {BrowserRouter , Routes , Route} from  "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Order from './pages/Order';
import FilteredData from './pages/FilteredData';
import ProductDetail from './pages/ProductDetail';
import Categorypage from './pages/Categorypage';
import OrderHistory from './pages/OrderHistory';
import About from './pages/About';
import AdminPanel from './pages/AdminPanel';

const App = () => {


  const [order, setOrder] = useState(null);
  return (
    <BrowserRouter>
    <Navbar/>
    <main>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route> 
        <Route path="/cart" element={<Cart/>}></Route> 
        <Route path="/checkout" element={<CheckOut setOrder={setOrder}/>}></Route> 
        <Route path="/order-confirmation" element={<Order order={order }/>}></Route> 
        <Route path="/filter-data" element={<FilteredData />}></Route> 
        <Route path="/product/:id" element={< ProductDetail/>}></Route>
        <Route path="/category/:categoryName" element={< Categorypage/>}></Route> 
        <Route path="/oder-history" element={<OrderHistory/>}></Route> 
        <Route path="/about" element={<About />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
  )
}

export default App