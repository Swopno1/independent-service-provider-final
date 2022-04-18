import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register/Register';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Signin from './Pages/Signin/Signin';

function App() {
  return (
    <>
      <Header></Header>
      <main className='min min-h-screen'>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='/services' element={<Services></Services>} />
          <Route path='/signin' element={<Signin></Signin>} />
          <Route path='/register' element={<Register></Register>} />
          <Route path='*' element={<NotFound></NotFound>} />
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
