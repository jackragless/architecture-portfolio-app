import React from "react"
import Fetch from "./fetch.js"

const Profile = () => {
  const [profile, setProfile] = React.useState(null)
  React.useEffect(() => {
    Fetch.profile().then((res) => setProfile(res.data.profile))
  })

  console.log(profile)

  if (profile) {
    return (
      // className="h-auto d-flex justify-content-center align-items-center my-4
      <div className="custRow content d-flex align-items-center justify-content-center">
        <div className="container profile">
          <div className="row">
            <div className="col-md my-2">
              <img
                className="img-fluid"
                src={profile.headshot}
                alt="img-missing"
              />
            </div>
            <div className="col d-flex align-items-center justify-content-center desc p-auto">
              <div>
                <p>
                  <b>{profile.desc}</b>
                </p>
                <div className="d-flex align-items-center justify-content-center">
                  <a className="mx-2" href={profile.resume} download>
                    <button type="button" class="btn btn-primary btn-dark">
                      Resume
                    </button>
                  </a>
                  <a className="mx-2" href={profile.portfolio} download>
                    <button type="button" class="btn btn-primary btn-dark">
                      Portfolio
                    </button>
                  </a>
                  <a href={profile.instagram} target="_blank">
                    <i class="bi bi-instagram mx-2"></i>
                  </a>
                  <a href={profile.linkedin} target="_blank">
                    <i class="bi bi-linkedin mx-2"></i>
                  </a>
                  <a
                    href={`mailto:{profile.email}?subject = Feedback&body = Message`}
                    target="_blank"
                  >
                    <i class="bi bi-envelope-fill mx-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
