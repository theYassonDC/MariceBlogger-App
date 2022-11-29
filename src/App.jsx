import { useState, useEffect } from 'react'
import './App.css'
import { useRoutes } from "react-router-dom";
import { routesList } from "./routes"
import Navbar from './components/navbar';
import urlBase from './utils/url-api';
import axios from 'axios';

function App() {
  const [production, setProduction] = useState({
    inDevelop: false
  })

  async function pingApi(){
    try {
      const { data } = await axios.get(urlBase.api_ping)
      if(data) return setProduction({ inDevelop: false })
      // if not dates in api
      if(!data) return setProduction({ inDevelop: true })
    } catch (error) {
      console.log(error)
      setProduction({ inDevelop: true })
    }
  }
  useEffect(() => {
    pingApi()
  }, [])
  const PageLists = useRoutes(routesList)
  return (
    <>
      <Navbar />
      <div className="App">
        {
          production.inDevelop ?
          <div className='absolute z-50 w-full h-full bg-black/80 z-200 prduct-m'>
            <h1 className='pt-64 text-9xl text-center text-white'>Sitio web en mantenimiento</h1>
            <h2 className='text-center text-xl text-white'>Estamos retocando algunas cosas o el servidor esta pausado hasta el siguiente mes..</h2>
          </div>
          : null
        }
        {PageLists}
      </div>
    </>
  )
}

export default App
