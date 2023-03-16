import React from 'react'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import LoginPage from './components/LoginPage';
import Unauthorize from './components/Unauthorize';

function AddUserForm() {
  // Utworzenie stanu lokalnego dla danych formularza (imię, email i wiek użytkownika)
  

  // Obsługa zmiany wartości pól tekstowych formularza za pomocą funkcji handleChange 
  const handleChange = (event) => {
      const { login, value } = event.target;
      setUser((prevUser) => ({
          ...prevUser,
          [login]: value,
      }));
  };

  // Obsługa wysłania formularza za pomocą funkcji handleSubmit 
  

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={user.name} onChange={handleChange} required />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <div>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" value={user.age} onChange={handleChange} required />
        </div>
        <button type="submit">Create User</button>
    </form>
    );
}
  
// Zwrócenie elementu JSX reprezentującego formularz dodawania użytkownika



function App() {
  return (
    <div className='h-screen w-screen p-0 m-0 overflow-hidden bg-[url("\\images\\loginBG.webp")] bg-cover bg-center bg-no-repeat bg-'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            
            <Route path="/LoginPage" element={<LoginPage />} />
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