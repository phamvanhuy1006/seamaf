import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import Login from './Component/Login';
import Register from './Component/Register';
import Admin from './Admin/Admin.js';
import Products from './Admin/Products.js';
import Categories from './Admin/Categories';
import Body from './Body/Body';
import ProductsCart from './Body/Product/ProductDetail';
import Cart from './Body/Cart/Cart';
import AddProduct from './Admin/AddProduct.js';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Body />}/>
        <Route path="product" element={<Outlet/>}>
          <Route path="" element={<div>huy</div>} />
          <Route path=":id" element={<ProductsCart />} />
        </Route>
        <Route path="cart-user" element={<Cart />} />
        <Route path="login" element={<Login />}/>
        <Route path="register" element={<Register />}/>
        <Route path="*" element={<div>404</div>} />
      </Route>
      <Route path="/admin" element={<Admin />}>
        <Route path='users' element={<div>huy</div>} />
        <Route path='products' element={<Products />} />
        <Route path='categories' element={<Categories />} />
        <Route path='add-product' element={<AddProduct />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
