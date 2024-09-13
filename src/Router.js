import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import NotFound from './pages/NotFound';
import TestLayout from './pages/TestLayout';
import SignUp from './pages/SignUp';
import TestCoordinationPost from './pages/TestCoordinationPost';
import MyPage from './pages/MyPage';
import Cart from './pages/Cart';
import Order from './pages/Order';
import ContestBoard from './pages/ContestBoard';
import Checkout from './pages/Checkout';
import CheckoutSuccess from './pages/CheckoutSuccess';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*누구나 접근 가능*/}
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/test" element={<TestLayout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/TestCoordinationPost" element={<TestCoordinationPost />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contest" element={<ContestBoard />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />

        {/*로그인한 사용자만 접근 가능*/}
        {/* <Route path="/list" element={<ProtectedRoute element={<List />} />} /> */}

        {/*관리자 권한만 접근 가능*/}
        {/* <Route
          path="/admin/noticelist"
          element={<ProtectedRoute element={<AdminNoticeList />} requiredRole="ROLE_ADMIN" />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
