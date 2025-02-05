import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Haha from './components/Haha'
import UserTable from './components/UserTable'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'
import ViewUser from './components/ViewUser'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<UserTable/>}/>
      <Route path='/user/create' element={<CreateUser/>}/>
      <Route path='/user/update/:userid' element={<UpdateUser/>}/>
      <Route path='/user/view/:userid' element={<ViewUser/>}/>
    </Routes>
    </>
  )
}

export default App
