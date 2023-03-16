import React from 'react'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import LoginPage from './components/LoginPage';
import Unauthorize from './components/Unauthorize';

function App() {
  return (
    <div className='h-screen w-screen p-0 m-0 overflow-hidden bg-[url("\\images\\loginBG.webp")] bg-cover bg-center bg-no-repeat bg-'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            
            <Route path="" element={<LoginPage />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/ErrorPage" element={<ErrorPage />} />
            <Route path="/Unauthorize" element={<Unauthorize />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;