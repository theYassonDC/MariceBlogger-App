import { useState, useEffect } from 'react'
import { useQuill } from 'react-quilljs'
import { Link, useParams } from 'react-router-dom'
import PostService from '../services/posts_service'


function Post() {
  const [state, setState] = useState(null)
  const { id } = useParams()
  const api = new PostService()
  const { quill, quillRef } = useQuill({ readOnly: true, modules: { toolbar: false}})
  useEffect(() => {
    const fetchPost = async () =>{
      const res = await api.getPost(id)
      setState(res)
      try{
        quill.setContents(JSON.parse(res.content))
      }catch(e){
        return
      }
    }
    fetchPost()
  }, [quill, id])

  return (
    <>
      <Link to="/">Volver</Link>
      <div className='editor my-5'>
        <article ref={quillRef}></article>
      </div>
    </>
  )
}

export default Post