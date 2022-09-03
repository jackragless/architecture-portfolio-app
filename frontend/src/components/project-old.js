import React, { useState } from "react"
import FsLightbox from "fslightbox-react"

function Project() {
  const [toggler, setToggler] = useState(false)

  return (
    <>
      <button onClick={() => setToggler(!toggler)}>Toggle Lightbox</button>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://i.imgur.com/fsyrScY.jpg",
          "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        ]}
      />
    </>
  )
}

export default Project
