import React from "react"
import Fetch from "./fetch.js"
import HoverImage from "react-hover-image"

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
            <div className="row d-flex justify-content-center ">
              {pair.map((project) => {
                if (project) {
                  return (
                    <a
                      href={`projects/${project.title}`}
                      className="col-md-5 my-1 mx-1 px-0 d-flex align-items-center justify-content-center ProjectItem"
                    >
                      <HoverImage
                        className="img-fluid img"
                        src={project.display[0]}
                        hoverSrc={project.display[1]}
                      />

                      <div className="desc">
                        <h1>
                          {project.title
                            .substring(0, project.title.indexOf("_"))
                            .toUpperCase()}
                        </h1>
                        <p>
                          {" "}
                          {project.title
                            .substring(project.title.indexOf("_") + 1)
                            .replace(/_/g, " ")}
                        </p>
                      </div>
                    </a>
                  )
                } else {
                  return <div className="col-sm-5 my-1 mx-1 px-0 "></div>
                }
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

export default ProjectsList
