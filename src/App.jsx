import { useState, useEffect } from 'react'
import './App.css'
import { useRoutes } from "react-router-dom";
import { routesList } from "./routes"
import Navbar from './components/navbar';

function App() {
  const [count, setCount] = useState({})
  const PageLists = useRoutes(routesList)
  return (
    <>
      <Navbar />
      <div className="App">
        {PageLists}
      </div>
    </>
  )
}

export default App
