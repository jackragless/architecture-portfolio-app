import axios from "axios"
const baseurl = "http://3.25.78.113:5000/api/"

export default class Fetch {
  static async projectsAll() {
    return await axios.get(baseurl + "projects")
  }

  static async projectsByTitle(title_query) {
    if (!title_query || typeof title_query != "string") {
      throw "title query must be non-null string"
    }
    return await axios.get(baseurl + `projects/?title=${title_query}`)
  }

  static async profile() {
    return await axios.get(baseurl + "profile")
  }
}


