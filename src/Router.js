import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

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
import NoticeList from './pages/NoticeList';
import NoticeDetail from './pages/NoticeDetail';
import ContestPostDetail from './pages/ContestPostDetail';
import RegisterContestPost from './pages/RegisterContestPost';
import Login from './pages/Login';

/**
 * 리액트 라우터
 * @author 조영욱
 * @since 2024.09.10
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.10  	조영욱        최초 생성
 * </pre>
 */

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*누구나 접근 가능*/}
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/test" element={<TestLayout />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/TestCoordinationPost" element={<TestCoordinationPost />} />
        <Route path="/contest" element={<ContestBoard />} />
        <Route path="/notice" element={<NoticeList />} />
        <Route path="/notice/:noticeId" element={<NoticeDetail />} />
        <Route path="/contest/:postId" element={<ContestPostDetail />} />
        <Route path="/contest/register" element={<RegisterContestPost />} />
        <Route path="/log-in" element={<Login />} />

        {/*로그인한 사용자만 접근 가능*/}
        <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
        <Route path="/order" element={<ProtectedRoute element={<Order />} />} />
        <Route path="/mypage" element={<ProtectedRoute element={<MyPage />} />} />
        <Route path="/checkout" element={<ProtectedRoute element={<Checkout />} />} />
        <Route path="/checkout-success" element={<ProtectedRoute element={<CheckoutSuccess />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
