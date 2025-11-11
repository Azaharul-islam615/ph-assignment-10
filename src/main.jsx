import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Homelayout from './layout/Homelayout.jsx'
import Home from './component/Home.jsx'
import Alljobs from './component/Alljobs.jsx'
import Login from './routes/Login.jsx';
import Register from './routes/Register.jsx';

import AddJob from './routes/Addjob.jsx';
import Categories from './component/Categories.jsx';
import Update from './component/Update.jsx';
import Myacceptedtask from './routes/Myacceptedtask.jsx';

const router=createBrowserRouter([
{path:'/',Component:Homelayout,
  children:[
    {index:true,Component:Home},
    {path:'/allapps',Component:Alljobs},
    {path:'/login',Component:Login},
    {path:'/register',Component:Register},
    {path:'/categories',Component:Categories},
    {path:"/addjob",Component:AddJob},
    {path:'/update',Component:Update},
    {path:'/acceptedtask',Component:Myacceptedtask}
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
