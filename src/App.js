import './App.css';
import newsService, { fetchForHomePage } from './API/News-Service';
import  React, { useEffect, useState } from 'react'
import Header from "./Components/Header/Header";
import LandingTop from "./Components/Landing/LandingTop";
import { Routes, Route } from 'react-router-dom';


function App() {
  const [news, setNews] = React.useState([]);

  const getHomePage = async (page = 0, size = 10) => {
    console.log("početak")
    try {
      console.log("drugi korak")
      const { data } = await fetchForHomePage();
      setNews(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      //toastError(error.message);
    }
  };

  useEffect(() => {
    getHomePage();
  }, []);

  return (
    <div className="app">
      <Header toggleSignInModal />
      <LandingTop></LandingTop>
    </div>
  );
}

export default App;
