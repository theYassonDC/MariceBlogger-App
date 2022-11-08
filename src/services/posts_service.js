import axios from "axios";
import urlBase from "../utils/url-api";
import config from "../utils/token.config"

class PostService {
  async getPosts() {
    const { data } = await axios.get(urlBase.posts.posts)
    return data
  }

  async createPost(credets, token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const { data } = await axios.post(urlBase.posts.add, credets, config)
    return data
  }

  async getPost(id) {
    const { data } = await axios.get(urlBase.posts.post + id)
    return data
  }

  async editPost(id, credets, { token }) {
    const { data } = await axios.put(urlBase.posts.edit + id, credets, config(token))
    return data
  }

  async deletePost(id, { token }) {
    const { data } = await axios.delete(urlBase.posts.delete + id, config(token))
    return data
  }
}

export default PostService;