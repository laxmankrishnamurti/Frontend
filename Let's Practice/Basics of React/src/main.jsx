import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { Home, About, Login, Contact, Profile } from './components/index.js'
import { getProfile } from './components/Profile/Profile.jsx'
import Root from './Root.jsx'


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='profile' element={<Profile />} loader={getProfile} ></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
