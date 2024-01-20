import Layout from 'components/Layout/Layout';
import HomePage from 'pages/HomePage';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'

const Contacts = lazy(() => import('pages/Contacts'))
const RegistrationPage = lazy(() => import('pages/RegistrationPage'))
const LoginPage = lazy(() => import('pages/LoginPage'))

const App = () => {
  
  return (   
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
};

export default App