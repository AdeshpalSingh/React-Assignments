import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HomePage from '../../Pages/HomePage'
import SettingPage from '../../Pages/SettingPage'
import Footer from '../components/Footer'

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/setting' element={<SettingPage/>}/>
            <Route path='/home' element={<HomePage/>}/>
            

            


        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default AppRoutes
