import "./custom.css"
import React from "react"
import { motion } from "framer-motion"
import { Routes, Route, useLocation } from "react-router-dom"
import ProjectsList from "./components/projects-list"
import Profile from "./components/profile"
import Project from "./components/project"

function App() {
  const location = useLocation()
  return (
    <div className="App box">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.3 }}
        className="box"
      >
        <nav className="navbar navbar-expand-sm mx-2 my-2 custRow header">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              CARMEN GRDOSIC
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/profile">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/projects">
                    Projects
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
                <a
                  href="https://www.instagram.com/creations_by_carmengrdosic/"
                  target="_blank"
                >
                  <i className="bi bi-instagram me-3"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/carmen-grdosic-8961641bb/"
                  target="_blank"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </ul>
            </div>
          </div>
        </nav>

        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<ProjectsList />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="projects/:title" element={<Project />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </motion.div>
    </div>
  )
}

export default App
