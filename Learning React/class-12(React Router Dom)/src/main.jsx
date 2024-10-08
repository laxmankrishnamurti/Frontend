import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

//Note :- Root component acts a very crutial role into the route system. It allows to render it's child route into it like a nesting routing. It acts like a Root layout of our application.

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='profile' element={<Github />} loader={githubInfoLoader} />
      <Route path='user/:name' element={<User />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
