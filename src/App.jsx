import Layout from 'components/Layout/Layout';
import PrivateRoute from 'guards/PrivateRoute';
import HomePage from 'pages/HomePage';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import { refreshThunk } from 'store/Auth/authThunk';
import { profileSelector } from 'store/Auth/selectors';

const Contacts = lazy(() => import('pages/Contacts'))
const RegistrationPage = lazy(() => import('pages/RegistrationPage'))
const LoginPage = lazy(() => import('pages/LoginPage'))

const App = () => {
  const profile = useSelector(profileSelector)
  const dispatch = useDispatch()

  useEffect(() => {

    !profile && dispatch(refreshThunk())
    
  }, [profile, dispatch])
  
  return (   
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path='contacts' element={<PrivateRoute><Contacts /></PrivateRoute>} />
          <Route path='register' element={<RegistrationPage />} />
          <Route path='login' element={<LoginPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
};

export default App