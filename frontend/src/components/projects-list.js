import React from "react"
import Fetch from "./fetch.js"

const ProjectsList = (props) => {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    Fetch.projectsAll()
      .then((res) => res.data)
      .then((data) => {
        setData(data.projects)
      })
  })

  if (data) {
    const project_pairs = []
    for (var i = 0; i < data.length; i += 2) {
      if (i + 1 < data.length) {
        project_pairs.push([data[i], data[i + 1]])
      } else {
        project_pairs.push([data[i], null])
      }
    }

    return (
      <div className="container ProjectGrid">
        {project_pairs.map((pair) => {
          return (
            <div className="row mh-50 my-2 d-flex justify-content-center ">
              {pair.map((project) => {
                return (
                  <a
                    href={`projects/${project.title}`}
                    className="col-sm-5 mb-2 d-flex align-items-center justify-content-center ProjectItem"
                  >
                    <img
                      className="img-fluid img-default"
                      src={project.display_images[0]}
                      alt="img-missing"
                    />
                    <img
                      className="img-fluid img-hidden"
                      src={project.display_images[1]}
                      alt="img-missing"
                    />
                    <div className="desc">
                      <h1>{project.title}</h1>
                      <p>{project.display_desc}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

export default ProjectsList
