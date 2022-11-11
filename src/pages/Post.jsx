import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import PostService from '../services/posts_service'
import ReactQuill from 'react-quill';
import CommentCard from '../components/Comments';
import $ from '../utils/getElement';
import CommentService from '../services/comments_service';
import md5 from 'md5-hash'

function Post() {
  const [state, setState] = useState(null)
  const [title, setTitle] = useState(null)

  const [comment, setComment] = useState({
    error: false,
    success: false
  })
  const [comments, setComments] = useState([])
  const { id } = useParams()
  const api = new PostService()
  const api_comment = new CommentService()

  const handleComment = async e => {
    e.preventDefault()
    let name = $("name").value
    let email = $("email").value
    let comment = $("comment").value
    if (!(name, email, comment)) return setComment({ error: true }), setTimeout(() => { setComment({ error: false }) }, 3000)
    const res = await api_comment.createComment({
      email: md5(email),
      emailName: name,
      comment,
      postId: id
    })
    if (res) {
      setComment({ success: true })
      setTimeout(() => { setComment({ success: false }) }, 2000)
      $("name").value = ""
      $("email").value = ""
      $("comment").value = ""
    }
  }

  const fetchComments = async () => {
    const lists = await api_comment.getComments(id)
    setComments(lists)
  }
  useEffect(() => {
    const fetchPost = async () => {
      const res = await api.getPost(id)
      const toJson = JSON.parse(res.content)
      setTitle(res.title)
      setState(toJson)
    }
    fetchPost()
  }, [id])
  useEffect(() => {
    fetchComments()
  })
  return (
    <>
      <Link to="/">Volver</Link>
      <div className='editor my-5'>
        <h1 className='ml-4'>Post - {title}</h1>
        <ReactQuill readOnly={true} value={state} modules={{ toolbar: false }} className="ml-auto m-20 mr-auto bg-slate-50" />
      </div>
      <div className='comment'>
        <h2 className='p-2 text-3xl'>Comentarios</h2>
        <hr className="border-2 border-zinc-400 cursor-pointer duration-500" />
        <form onSubmit={handleComment} className='w-96 m-3'>
          <p className='text-sm'>Escriba un comentario sobre este post</p>
          <input type="text" id='name' placeholder='Escriba su nombre' className='form-control
        block
        w-80
        px-4
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        my-1
        focus:text-gray-700 focus:bg-white focus:border-zinc-700 focus:outline-none'/>
          <input type="email" id='email' placeholder='Escriba su correo electronico' className='form-control
        block
        w-80
        px-4
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        my-1
        focus:text-gray-700 focus:bg-white focus:border-zinc-700 focus:outline-none'/>
          <p className='text-xs text-neutral-600 w-full pb-2'>Crea una cuenta en <a className='text-blue-500' href='https://gravatar.com/connect/?source=_signup'>Gravatar</a> para tener una foto de perfil</p>
          <textarea id='comment' placeholder='¿Que piensas?' className='my-1 p-2 rounded' rows="4" cols="50" />
          {comment.error ? <p className='text-sm text-red-700 w-full p-2'>Rellema todos los parametros requeridos para comentar!</p> : null}
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
      duration-150
      ease-in-out'>Comentar</button>
        </form>
        {comment.success ? <p className='text-2xl text-green-500 w-full p-2 text-center'>¡Comentario publicado!</p> : null}
        <div className='flex flex-wrap flex-col-reverse p-3'>
          {
            comments ?
              comments.map((v, i) =>
                <>
                  <div key={i}>
                    <CommentCard avatar={`https://www.gravatar.com/avatar/${v.email}`}
                      name={v.emailName}
                      time={v.date}
                      content={v.comment}
                    />
                  </div>
                </>
              )
              : <> <h3>No hay comentarios :</h3> </>
          }
        </div>
      </div>
    </>
  )
}

export default Post