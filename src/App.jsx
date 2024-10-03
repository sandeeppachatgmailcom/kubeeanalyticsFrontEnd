import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Common/Header'
import Footer from './components/Common/Footer'
import { useSelector } from 'react-redux'

function App() {
  const excludePage = ['login','signup','']
  const [count, setCount] = useState(0)
  const page = useSelector((state) => state.page.pageName)
  useEffect(() => {
    console.log(page, 'page',!excludePage.includes(page))
    
  }, [page])
  return (
    <div className=' flex flex-col  w-full h-screen'>
      {
        !(excludePage.includes(page)) ?
          <div className={`h-[10%] w-full`}>
            <Header />
          </div> : ''
      }
      <div className={` ${page == 'login' ? 'h-[100%]' : 'h-[80%]'} w-full`}>
        <Outlet />
      </div>
      {
        !(excludePage.includes(page)) ?
          <div className={`h-[10%] w-full`}>
            <Footer />
          </div> : ''

      }

    </div>
  )
}

export default App
