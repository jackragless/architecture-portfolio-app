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
      <div
        className="profile d-flex align-items-center justify-content-center"
        style={{ height: "80vh" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg mx-3">
              <img
                className="img-fluid"
                src={profile.headshot}
                alt="img-missing"
              />
            </div>
            <div className="col d-flex align-items-center mx-3 desc">
              <div>
                <p>
                  <b>{profile.desc}</b>
                </p>
                <div className="d-flex align-items-center">
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
                  {/* <p className="m-0" style={{ fontWeight: "bold" }}>
                    {profile.email}
                  </p> */}
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
