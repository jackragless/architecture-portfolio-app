import app from "./server.js"
import mongodb from "mongodb"
const mc = mongodb.MongoClient
import dbapi from "./dbapi.js"
import dotenv from "dotenv"
dotenv.config()

const db_uri =
  "mongodb+srv://jackragless:mernstack@cluster0.she2tlp.mongodb.net/?retryWrites=true&w=majority"

const port = process.env.PORT || 5000

mc.connect(db_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async (client) => {
  await dbapi.inject(client)
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
})
