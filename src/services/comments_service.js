import axios from "axios";
import urlBase from "../utils/url-api";

export default class CommentService {
  async createComment(credets) {
    const { data } = await axios.post(urlBase.comments.add, credets)
    return data
  }

  async getComments(id) {
    const { data } = await axios.get(urlBase.comments.gets+id)
    return data
  }
}