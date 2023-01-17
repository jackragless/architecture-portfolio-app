import React from "react"
import { useParams } from "react-router-dom"
import Slider from "react-slick"
import Fetch from "./fetch.js"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const Project = () => {
  const settings = {
    lazyLoad: "ondemand",
    variableWidth: true,
    touchMove: true,
    infinite: false,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 1,
  }

  const { title } = useParams()
  const [data, setData] = React.useState(null)
  const [toggler, setToggler] = React.useState(false)
  const [curimage, setCurimage] = React.useState(null)

  React.useEffect(() => {
    Fetch.projectsByTitle(title)
      .then((res) => res.data)
      .then((data) => {
        setData(data.projects[0])
      })
  })

  if (data) {
    return (
      <Slider {...settings}>
        {data.main_images.map((view) => {
          return (
            <div className="slickCard container-fluid">
              <div className="d-flex justify-content-end SliderImg">
                <i
                  className=" position-absolute bi bi-plus-square-fill p-2 "
                  onClick={() => {
                    setToggler(!toggler)
                    setCurimage("/" + view.high_res_img)
                  }}
                  style={{
                    cursor: "pointer",
                    color: "black",
                    opacity: 0.5,
                    fontSize: "2vh",
                  }}
                ></i>
                <img src={"/" + view.low_res_img} alt="img-missing" />
              </div>
              <div
                className="p-1 mt-3 slide-desc"
                dangerouslySetInnerHTML={{ __html: view.html_desc }}
              ></div>
            </div>
          )
        })}
      </Slider>
    )
  }
}

export default Project
