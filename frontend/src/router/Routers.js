import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDeatails from './../pages/TourDeatails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultDetails from './../pages/SearchResultDetails';

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to = '/home' />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDeatails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tours/search" element={<SearchResultDetails />} />
    </Routes>
  )
}

export default Routers
