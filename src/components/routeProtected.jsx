import React from "react"
import { Navigate, Route} from 'react-router-dom'
import getlocalStorage from '../utils/getLocalStorage'

// Protected routes v1.0
const access_token= getlocalStorage()

const isNotLoggend = (element) => {
    if(!access_token) return <Navigate to="/login" />
    return element
}
const isLoggend = (element) =>{
  if(access_token) return <Navigate to="/" />
  return element
}

export { isNotLoggend, isLoggend }