import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/register/SignUp';
import { useAuthContext } from './context/auth.context';
import AdditionalInfo from './pages/register/Additional';
import React from "react";

import { SchemeRecommend } from './components/SchemeRecommend';


function App() {
  const { authUser }= useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'> 
      <Routes>
      <Route
        path='/'
        element={<AdditionalInfo/>}
      /> 
      
      <Route
        path='/login'
        element={authUser ? <Navigate to='/SchemeRecommend' /> : <Login />}
      />

      <Route path="/SchemeRecommend" 
         element={authUser ? <SchemeRecommend/> : <Login /> } />
      <Route
        path='/signup'
        element={authUser ?   <Navigate to = '/SchemeRecommend'/> : <SignUp/>}
      />
      <Route
        path='/additional-info'
        element={
           
            <AdditionalInfo />
          
        }
      />
    </Routes>
    </div>
  );
}

export default App
