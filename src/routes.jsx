import * as React from "react";
import { isLoggend, isNotLoggend } from "./components/routeProtected";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import Post from "./pages/Post";
import RegisterPage from "./pages/Register";

export const routesList = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: isLoggend(<LoginPage />)
  },
  {
    path: "/register",
    element: isLoggend(<RegisterPage />)
  },
  {
    path: "/create/post",
    element: isNotLoggend(<CreatePost />)
  },
  {
    path: "/post/:id",
    element: <Post />
  }
]