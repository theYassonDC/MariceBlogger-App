import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PostService from '../services/posts_service'

function Home() {
  const [state, setState] = useState(null)
  const api = new PostService()
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await api.getPosts()
      setState(res)
    }
    fetchPosts()
  }, [])

  return (
    <>
      <div className='text-center pt-5'>
        <h1 className='text-7xl text-blue-700'>Marice blog</h1>
        <p className='text-2xl text-slate-500 font-medium'>Bienvenido al blog de la institucion educativa marice sinisterra donde tu como estudiante puedes crear posts y comentar!</p>

        <h2 className='text-neutral-600 my-16 text-left p-5 text-xl'>Todos los articulos</h2>
        <div className='flex flex-wrap justify-evenly gap-2 flex-row-reverse p-3'>
          {
            state ?
            state.map(v =>
              <div key={v.id} className="w-1/2 min-w-min max-w-xl h-64 bg-slate-200	rounded-md border-2 p-3">
                <p className='text-sm text-slate-400 text-left'>{v.date.slice(0,10).replace(/-/i, '/').replace(/-/i, '/').slice(0, 10)}</p>
                <Link to={`/post/${v.id}`}><h1 className='my-7 hover:text-neutral-400'>{v.title}</h1></Link>
              </div>
            )
            : null
            }
        </div>
      </div>
    </>
  )
}

export default Home