import axios from "axios"

class RestService {
  async get(url) {
    return await axios.get(url)
  }

  async post(url, data) {
    return await axios.post(url, data)
  }
}

export const restService = new RestService()
