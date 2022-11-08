import axios from "axios";
import config from "../utils/token.config";
import urlBase from "../utils/url-api";

class UserService {
  async getUsers() {
    const { data }  = await axios.get(urlBase.users.gets)
    return data 
  }

  async createUser(credets) {
    const { data } = await axios.post(urlBase.users.create, credets)
    return data
  }

  async loginUser(credets) {
    const { data } = await axios.post(urlBase.auth.login, credets)
    return data
  }
}

export default UserService