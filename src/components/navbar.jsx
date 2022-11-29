import { useState } from 'react'
import { Link } from 'react-router-dom'
import getlocalStorage from '../utils/getLocalStorage'
import IconMarice from './icons/i-maricebadge'


function Navbar() {
  const sesion = getlocalStorage()

  const handleClick = () => {
    window.localStorage.removeItem("user")
    window.location.reload()
  }

  return (
    <>
      <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 z-50 text-gray-500 hover:text-zinc-900 focus:text-gray-700">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div className="container-fluid">
            <Link className="text-2xl text-black" to={"/"}><IconMarice width={45} height={45} style={{ display: "inherit" }} /> Marice blog<span className='text-slate-800 text-2xl px-3'>|</span>by Juanda</Link>
          </div>
          {
            sesion ?
            <>
              <Link className="text-xl text-slate-700 ml-auto mr-8" to={"/"}>Inicio</Link>
              <Link className="text-xl text-emerald-600 hover:text-emerald-400 mr-8" to={"/create/post"}>Crear un nuevo post</Link>
              <button className="text-xl text-red-400 hover:text-red-500" onClick={handleClick}>Cerrar sesion</button>
            </>
            :
            <>
            
              <Link className="text-xl text-slate-700 ml-auto mr-8" to={"/"}>Inicio</Link> 
              <Link className="text-xl text-slate-700 mr-8" to={"/login"}>Iniciar sesion</Link>
              <Link className='text-xl text-emerald-600 hover:text-emerald-400' to={"/register"}>Crear una cuenta</Link>
            </>
          }
        </div>
      </nav>
    </>
  )
}

export default Navbar