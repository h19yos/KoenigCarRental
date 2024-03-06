import './App.css';
import api from './api/axiosConfig.js';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route, } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import NotFound from './components/notFound/NotFound';
import Register from './authorization/Register/Register.js';
import Login from './authorization/Login/Login.js';
import ContactUs from './components/contacts/ContactUs.js';
import ProfileUser from './authorization/Profile/ProfileUser.js';
import Footer from "./components/footer/Footer.js";
import CarsList from './components/carslist/CarsList.js';
import AboutUs from './components/about/AboutUs.js';


function App() {

  const [cars, setCars] = useState();
  const [car, setCar] = useState();

  const getAllCars = async () => {

    try {

      const response = await api.get(`http://localhost:4000/cars`);

      setCars(response.data);

    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllCars();
  }, []);

  const getCar = async (id) => {

    try {
      const response = await api.get(`http://localhost:4000/cars/${id}`);

      const singleCar = response.data;

      setCar(singleCar);

    }
    catch (error) {
      console.error(error);
    }

  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/contacts" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/carslist" element={<CarsList getAllCars={getAllCars} cars={cars} car={car} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfileUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
