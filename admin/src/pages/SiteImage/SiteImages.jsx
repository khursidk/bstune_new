import React from 'react'
import "./SiteImage.css"

const SiteImages = () => {
  return (
    <div>
        <div className="hero">
      <div className="albumPic">
        <h1>Album Picture</h1>
        <div className="sub-section">
          <input type="file" />
          <i className="fa-solid fa-trash"></i>
        </div>

        <div className="sub-section">
          <input type="file" />
          <i className="fa-solid fa-trash"></i>
        </div>

        <div className="sub-section">
          <input type="file" />
          <i className="fa-solid fa-trash"></i>
        </div>

        <div className="sub-section">
          <input type="file" />
          <i className="fa-solid fa-trash"></i>
        </div>

        <div className="sub-section">
          <input type="file" />
          <i className="fa-solid fa-trash"></i>
        </div>

        <div className="sub-section">
          <input type="file" />
          <i className="fa-solid fa-trash"></i>
        </div>

        <button>Upload</button>
      </div>

      <div className="memberPic">
        <h1>Member Picture</h1>

        <div className="sub-section">
          <input type="file" />
          <span>Biswajit Sahoo</span>
          <i className="fa-solid fa-trash"></i>
        </div>

        <div className="sub-section">
          <input type="file" />
          <span>Chinmaya Ku. Maharana</span>
          <i className="fa-solid fa-trash"></i>
        </div>

        <div className="sub-section">
          <input type="file" />
          <span>GC Mishra</span>
          <i className="fa-solid fa-trash"></i>
        </div>

        <div className="sub-section">
          <input type="file" />
          <span>Jitendra Kumar Ojha</span>
          <i className="fa-solid fa-trash"></i>
        </div>

        <div className="sub-section">
          <input type="file" />
          <span>Suvendu Kishor Sahoo</span>
          <i className="fa-solid fa-trash"></i>
        </div>

        <div className="sub-section">
          <input type="file" />
          <span>Subham Jena</span>
          <i className="fa-solid fa-trash"></i>
        </div>

        <div className="sub-section">
          <input type="file" />
          <span>Ram Prasad Acharya</span>
          <i className="fa-solid fa-trash"></i>
        </div>

        <div className="sub-section">
          <input type="file" />
          <span>Shailesh Pattanaik</span>
          <i className="fa-solid fa-trash"></i>
        </div>

        <button className='siteBtn'>Upload</button>
      </div>
    </div>
    </div>
  )
}

export default SiteImages
