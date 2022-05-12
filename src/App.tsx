import React, { lazy, Suspense, useState } from 'react';
import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NotFoundPage from 'pages/notFoundPage/NotFoundPage';

const LoginPage = lazy(() => import('pages/loginPage/LoginPage'));
const RegistrationPage = lazy(() => import('pages/registrationPage/RegistrationPage'));

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={
        <Suspense fallback={<>...</>}>
          <LoginPage />
        </Suspense>
      } />
      <Route path='/registration' element={
        <Suspense fallback={<>...</>}>
          <RegistrationPage />
        </Suspense>
      } />
      <Route path='*' element={<Navigate to='login' />} />
    </Routes>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}
function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <BrowserRouter>
      {isAuth ? (
        <AppRoutes />
      )
        :
        (
          <AuthRoutes />
        )
      }
    </BrowserRouter>
  );
}

export default App;
