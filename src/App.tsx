import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './components/TodoApp/TodoApp';
import Table from './components/Table/Table';
import { Column } from './components/Table/type';
import { Counter } from './components/Counter/Counter';
import Post from './components/Post/Post';
import ModalCustom from './components/StyledComponents/Modal/ModalCustom';
import CustomInput from './components/StyledComponents/Input/CustomInput';
import Form from './components/StyledComponents/Form/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
