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
      <div className="h-100 d-flex justify-content-center align-items-center my-4 profile">
        <div className="container">
          <div className="row">
            <div className="col-sm my-2">
              <img
                className="img-fluid"
                src={profile.headshot}
                alt="img-missing"
              />
            </div>
            <div className="col d-flex align-items-center position-static my-2 desc">
              <div>
                <p>
                  <b>{profile.desc}</b>
                </p>
                <div className="d-flex justify-content-center align-items-center">
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
                  <p className="m-0" style={{ fontWeight: "bold" }}>
                    carmengrdosic@gmail.com
                  </p>
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
