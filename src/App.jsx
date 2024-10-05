import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Common/Header'
import Footer from './components/Common/Footer'
import { useSelector } from 'react-redux'

function App() {  
  const page = useSelector((state) => state.page.pageName)
  const user = useSelector((state)=>state.user.user)
   
  return (
    <div className=' flex flex-col  w-full h-screen'>
      {
        Object.keys(user).length ?
          <div className={`h-[10%] w-full`}>
            <Header />
          </div> : ''
      }
      <div className={` ${page == 'login' ? 'h-[100%]' : 'h-[80%]'} w-full`}>
        <Outlet />
      </div>
      {
        Object.keys(user).length  ?
          <div className={`h-[10%] w-full`}>
            <Footer />
          </div> : ''

      }

    </div>
  )
}

export default App
