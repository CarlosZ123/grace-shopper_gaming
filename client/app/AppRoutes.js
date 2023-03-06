import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import AuthForm from '../features/auth/AuthForm';
import SignUp from '../features/auth/SignUp';
import Home from '../features/home/Home';
// import { me } from './store';
import CheckoutForm from '../features/checkout/CheckoutForm';
import ShoppingCart from '../features/shoppingCart/ShoppingCart';
import Wishlist from '../features/Wishlist/Wishlist';
import Featured from '../features/Featured/Featured';
// import ProductsTest from '../features/allProducts/ProductsTest'
import Login from '../features/auth/Login';
import AllProducts from '../features/allProducts/allProducts';
import Games from '../../server/api/utils/game'


/**
 * COMPONENT
 */

const AppRoutes = () => {
  // const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(me());
  // }, []);

  return (
    <div>
      {/* // isLoggedIn ?  */}
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
        </Routes>
        <Routes>
          {/* <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          /> */}
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route
            path="/cart"
            element={<ShoppingCart />}
          />
         <Route
            path="/checkout"
            element={<CheckoutForm />}
          />
          <Route
            path="/wishlist"
            element={<Wishlist />}
          />
          <Route
            path="/featured"
            element={<Featured />}
          />
          <Route
            path="/products"
            element={<AllProducts />}
          />
          <Route
            path="/games"
            element={<Games />}
          />
        </Routes>
    </div>
  );
};

export default AppRoutes;
