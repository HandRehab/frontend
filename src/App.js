import React from 'react'
import './App.css';
import {Route,Routes} from "react-router-dom"
import Land from './routes/Landing';
import Log from './routes/Log';
import ContactDev from './routes/ContactDev';
import Contact from './components/Contact';
import AdminContact from './routes/AdminContact';
import AdminHome from './routes/AdminHome';
import PatientReg from './routes/PatientReg';
import DocReg from './routes/DocReg';
import Home from './routes/Home';
import PatietHome from "./routes/PatientHome"
import Assesment from './routes/Assessment';
import Rehabilitation from './routes/Rehabilitation';
import DoctorChat from './routes/DoctorChat';

const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Land/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path='/ContactDev' element={<ContactDev/>}/>
    <Route path='/AdminContact' element={<AdminContact/>}/>
    <Route path="/Log" element={<Log/>}/>
    <Route path='/Admin' element={<AdminHome/>}/>
    <Route path="/Patient" element={<PatietHome/>}/>
    <Route path='/Reg' element={<PatientReg/>}/>
    <Route path='/DocReg' element={<DocReg/>}/>
    <Route path='/Assessment' element={<Assesment/>}/>
    <Route path='/Rehabilitation' element={<Rehabilitation/>}/>
    <Route path='/DoctorChat' element={<DoctorChat/>}/>
    </Routes>
    </>
  )
}

export default App
