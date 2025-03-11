import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login/login'
import Signup from './Components/signup/Signup'
import Home from './Components/home/Home'
import Resume from './Components/resumebuild/Resume'
import Resumeform from './Components/ResumeForm/Resumeform'
import Template4 from './Components/Template/Template4/Template4'
import Template4one from './Components/Template/Template4/Template4.1'
import TemplateBlue from './Components/Template/Template4/TemplateBlue'
import TemplateOrange from './Components/Template/Template4/TemplateOrange'
import TemplateSkyBlue from './Components/Template/Template4/TemplateSkyBlue'
import HelpToSelectForm from './Components/helper/HelpToSelectForm'
import Template5 from './Components/Template/Template4/Template5'
import Chat from './Components/chat/chat'
import RoomSelection from './Components/roomSelection/RoomSelection'

function App() {

  return (
    <>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/resumecreate' element={<Resume/>} />
        {/* <Route path='/resumeform/:paramString' element={<Resumeform/>} /> */}
        <Route path='/resumeform/:paramString' element={<HelpToSelectForm/>} />
        <Route path='/Template4' element={<Template5/>} />
        {/* <Route path='/Template4' element={<Template4one/>} /> */}
        {/* <Route path='/Template4' element={<TemplateBlue/>} /> */}
        {/* <Route path='/Template4' element={<TemplateOrange/>} /> */}
        <Route path='/Templateblue' element={<TemplateBlue/>} />
        <Route path='/roomselect' element={<RoomSelection/>} />
        <Route path='/chat/:roomId' element={<Chat/>} />
      </Routes>
      {/* <p className='bg-red-400'>heyy</p> */}
      {/* <Login/> */}
      {/* <Signup/> */}
    </>
  )
}

export default App
