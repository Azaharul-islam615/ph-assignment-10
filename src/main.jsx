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
import { ToastContainer } from 'react-toastify';
import Authprovider from './Context/Authprovider.jsx';
import Privetprovider from './component/privetroute/Privetprovider.jsx';
import Errorpage from './component/Errorpage.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyAddedJobs from './routes/Myaddeddjob.jsx';


AOS.init({
  duration: 700,
  easing: 'ease-in-out',
  once: false
})

const router=createBrowserRouter([
{path:'/',Component:Homelayout,
    errorElement: <Errorpage></Errorpage>,
  children:[
    {index:true,Component:Home},
    {path:'/allapps',element:<Privetprovider><Alljobs></Alljobs></Privetprovider>},
    {path:'/login',Component:Login},
    {path:'/register',Component:Register},
    {path:'/categories/:id',element:<Privetprovider><Categories></Categories></Privetprovider>},
    {path:"/addjob",element:<Privetprovider><AddJob></AddJob></Privetprovider>},
    {path:'/update/:id',element:<Privetprovider><Update></Update></Privetprovider>},
    {path:'/acceptedtask',element:<Privetprovider><Myacceptedtask></Myacceptedtask></Privetprovider>},
    {path:'/myjob',element:<Privetprovider><MyAddedJobs></MyAddedJobs></Privetprovider>}
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider> <RouterProvider router={router}></RouterProvider></Authprovider>
    <ToastContainer />
  </StrictMode>,
)
