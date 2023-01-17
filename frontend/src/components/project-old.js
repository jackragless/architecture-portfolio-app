import React from "react"
import { useParams } from "react-router-dom"
import Slider from "react-slick"
import Fetch from "./fetch.js"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const SamplePrevArrow = (props) => {
  const { className, onClick } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={`bi bi-arrow-left-square-fill ${className}`}
      onClick={onClick}
      style={{
        left: "20px",
        zIndex: 3,
        color: "black",
        opacity: 0.5,
        display: "block",
        height: "max(4vh,40px)",
        width: "max(4vw,40px)",
      }}
      viewBox="0 0 16 16"
    >
      <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
    </svg>
  )
}

const SampleNextArrow = (props) => {
  const { className, onClick } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={`bi bi-arrow-right-square-fill ${className}`}
      onClick={onClick}
      style={{
        right: "20px",
        zIndex: 3,
        color: "black",
        opacity: 0.5,
        display: "block",
        height: "max(4vh,40px)",
        width: "max(4vw,40px)",
      }}
      viewBox="0 0 16 16"
    >
      <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
    </svg>
  )
}

const Project = () => {
  const settings = {
    lazyLoad: "ondemand",
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    touchMove: true,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
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
      <div style={{ display: "contents" }}>
        <div className="custRow content d-flex align-items-center d-none d-md-flex">
          <div className="mw-100">
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
          </div>
        </div>
        <div className="container d-md-none">
          {data.main_images.map((view) => {
            return (
              <div className="row">
                <div className="col p-0">
                  <img
                    className="img-fluid"
                    src={"/" + view.low_res_img}
                    alt="img-missing"
                  />
                  <div
                    className="container-fluid m-2 slide-desc"
                    dangerouslySetInnerHTML={{ __html: view.html_desc }}
                  ></div>
                </div>
              </div>
            )
          })}
        </div>
        {toggler && (
          <Lightbox
            mainSrc={curimage}
            onCloseRequest={() => setToggler(false)}
          ></Lightbox>
        )}
      </div>
    )
  }
}

export default Project
