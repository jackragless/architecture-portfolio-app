let projects
let profile
const db_name = "carmen-arch-folio"

export default class dbapi {
  static async inject(conn) {
    try {
      projects = await conn.db(db_name).collection("projects")
    } catch (e) {
      console.error(
        `Unable to establish a collection with projects table: ${e}`
      )
    }

    try {
      profile = await conn.db(db_name).collection("profile")
    } catch (e) {
      console.error(`Unable to establish a collection with profile table: ${e}`)
    }
  }

  static async getProjects(req, res, next) {
    let query = {}
    const project_title = req.query.title

    if (project_title) {
      query = { title: { $eq: project_title } }
    }
    const project_list = await projects.find(query).toArray()

    return res.json({ projects: project_list })
  }

  static async getProfile(req, res, next) {
    const profile_obj = await profile.find({}).toArray()
    return res.json({ profile: profile_obj[0] })
  }
}
