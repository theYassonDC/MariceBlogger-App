import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorAlert from '../components/alertError'
import UserService from '../services/users_service'

function RegisterPage() {
  const [state, setState] = useState(null)
  const navigate = useNavigate()
  const api = new UserService()

  const handleSubmit = async e =>{
    e.preventDefault()
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    if(!(name, email, password)) return setState(true), setTimeout(() => { setState(false) }, 3000)
    const res = await api.createUser({
      name,
      email,
      password
    })
    navigate("../login", {replace: true})
  }
  return (
    <>
      <div className=''>
        <h1 className='pt-12 text-center'>Registrarme</h1>
        <p className='text-center'>Registrate y crea un post para debatir sobre un tema insitucional o general de la institucion</p>
        { state ? <ErrorAlert message="Rellena todos los campos para poder registrarte" /> : null }
        <div className='block p-6 ml-auto mr-auto my-11 rounded-lg shadow-lg bg-white max-w-sm'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='name' className='form-label inline-block mb-2 text-gray-700 text-left'>Escriba su nombre</label>
            <input type="text" id="name" placeholder='Nombre' className='form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-zinc-700 focus:outline-none'/>
            <br />
            <label htmlFor='name' className='form-label inline-block mb-2 text-gray-700 text-left'>Escriba su correo electronico</label>
            <input type="text" id='email' placeholder='Correo electronico' className='form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-zinc-700 focus:outline-none'/>
            <small id="email" className="block mt-1 text-xs text-gray-600 text-left">Es recomendable poner tu correo institucional</small>
            <br />
            <label htmlFor='password' className='form-label inline-block mb-2 text-gray-700'>Escriba una contraseña segura</label>
            <input type="password" id='password' placeholder='Contraseña' className='form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-zinc-700 focus:outline-none'/>
            <br />
            <button type='submit' className='px-6
      py-2.5
      bg-green-500
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-green-700 hover:shadow-lg
      focus:bg-green-500 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-green-500 active:shadow-lg
      transition
      w-full
      duration-150
      ease-in-out'>Registrarme</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default RegisterPage