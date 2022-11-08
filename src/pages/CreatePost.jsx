import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'quill/dist/quill.snow.css'
import PostService from '../services/posts_service'
import toolbarOptions from '../utils/toolbar.config'
import { useQuill } from 'react-quilljs'
import $ from '../utils/getElement'
import getlocalStorage from '../utils/getLocalStorage'

function CreatePost() {
  const [state, setState] = useState(null)
  const navigate = useNavigate()
  const { access_token, id } = getlocalStorage()
  const { quill, quillRef } = useQuill({ modules: { toolbar: toolbarOptions } })
  const api = new PostService()
  const handleSubmit = async e => {
    e.preventDefault()
    const title = $("title").value
    await api.createPost({
      title,
      content: JSON.stringify(quill.getContents()),
      authorId: id
    }, access_token)
    navigate("../", {replace: true})
  }
  return (
    <>
      <h1 className='text-center'>Create post</h1>
      <form onSubmit={handleSubmit} className="block">
        <input type="text" id='title' placeholder="Titulo"  className='form-control
        block
        w-64
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
        focus:text-gray-700 focus:bg-white focus:border-zinc-700 focus:outline-none'/>
        <div className="editor my-7">
          <div ref={quillRef}></div>
        </div>
        <button type="submit" className="px-6
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
      ease-in-out'" >Crear post</button>
      </form>
    </>
  )
}

export default CreatePost
