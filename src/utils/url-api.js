const domain = {
  api: "http://localhost:3000/api"
}

const urlBase = {
  users: {
    gets: `${domain.api}/users`,
    create: `${domain.api}/users/create`
  },
  auth: {
    login: `${domain.api}/auth`
  },
  posts: {
    add: `${domain.api}/posts/add`,
    posts: `${domain.api}/posts`,
    post: `${domain.api}/posts/`,
    delete: `${domain.api}/posts/delete/`,
    edit: `${domain.api}/posts/edit/`
  },
  comments: {
    gets: `${domain.api}/comments/post/`,
    add: `${domain.api}/comments/add`
  }
}
export default urlBase;
