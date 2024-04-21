import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Header from '../components/Header';


const Home = () => {
    return (
      <>
      <Header />
      <Sidebar />
      <div className="page">

     


        <Outlet />
       
      
      </div>
      <Footer />
    </>
    );
  };
  export default Home;