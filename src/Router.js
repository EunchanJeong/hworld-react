import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import NotFound from './pages/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*누구나 접근 가능*/}
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />

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