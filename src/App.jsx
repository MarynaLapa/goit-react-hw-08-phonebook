import Layout from 'components/Layout/Layout';
import Loader from 'components/Loader/Loader';
import PrivateRoute from 'guards/PrivateRoute';
import PublicRoute from 'guards/PublicRoute';
import HomePage from 'pages/HomePage';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom'
import { refreshThunk } from 'store/Auth/authThunk';

const Contacts = lazy(() => import('pages/Contacts'))
const RegistrationPage = lazy(() => import('pages/RegistrationPage'))
const LoginPage = lazy(() => import('pages/LoginPage'))

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {

   dispatch(refreshThunk())
    
  }, [dispatch])

  return ( 
    <> 
      <Loader/> 
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage />} />
            <Route path='contacts' element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>} />
            <Route path='register' element={
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>} />
            <Route path='login' element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  )
};

export default App