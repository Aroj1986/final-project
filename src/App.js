import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/Navbar/AboutUs';
import ExploreExperts from './components/Experts/ExploreExperts';
import ExpertPortfolio from './components/Experts/ExpertPortfolio'
import MeetUs from './components/Navbar/MeetUs';
import Feedback from './components/Navbar/Feedback';
import Register from './components/RegisterLogin/Register';
import Login from './components/RegisterLogin/Login'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<AboutUs />}></Route>
        <Route path='/explore-experts' element={<ExploreExperts />}></Route>
        <Route path='/explore-experts/:id' element={<ExpertPortfolio />}></Route>
        <Route path='/meet-us' element={<MeetUs />}></Route>
        <Route path='/feedback' element={<Feedback />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;