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
const router=createBrowserRouter([
{path:'/',Component:Homelayout,
  children:[
    {index:true,Component:Home},
    {path:'/allapps',Component:Alljobs}
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
