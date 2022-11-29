import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorAlert from '../components/alertError'
import UserService from '../services/users_service'
import $ from '../utils/getElement'

function LoginPage() {
  const [state, setState] = useState(null)
  const navigate = useNavigate()
  const api = new UserService()

  const loginHandler = async e => {
    e.preventDefault()
    const name = $("name").value
    const password = $("password").value
    if (!(name, password)) return setState(true), setTimeout(() => { setState(false) }, 3000)
    try {
      const res = await api.loginUser({
        username: name,
        password
      })
      window.localStorage.setItem('user', JSON.stringify(res))
      window.location.reload();
      navigate("../", { replace: true })
    } catch (e) {
      setState(true)
      setTimeout(() => { setState(false)}, 3000)
    }
  }

  return (
    <>
      <div className=''>
        <h1 className='text-center py-24'>Logearme</h1>
        {state ? <ErrorAlert message="Rellena todos los campos requeridos" /> : null}
        {state ? <ErrorAlert message="Contraseña o nombre de usuario incorrectos" /> : null}
        <div className='block p-6 ml-auto mr-auto my-11 rounded-lg shadow-lg bg-white max-w-sm'>
          <form onSubmit={loginHandler}>
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
            <label htmlFor='password' className='form-label inline-block mb-2 text-gray-700'>Escriba su contraseña segura</label>
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
      ease-in-out'>Iniciar sesion</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginPage