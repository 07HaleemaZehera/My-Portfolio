import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/07HaleemaZehera" target="_blank">
                <i className="fa fa-github fa-2x" />
              </a>
              <a href="https://www.linkedin.com/in/haleema-zehera/" target="_blank">
                <i className="fa fa-linkedin fa-2x" />
              </a>
             
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hi, I'M{" "}
              <span className="highlighted-text">
                Haleema <span className="last-name">Zehera</span>
              </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    
                    "Full stack Developer",
                    1000,
                    "MERN / MEAN stack Dev",
                    1000,
                 
                    
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
            ❝ Writing clean, functional code on the front-end and back-end ❞
            </span>
          </div>

          <div className="profile-options">
            <a href="https://docs.google.com/document/d/1n7hWYYFk3cYWhpjrgxRkoLKeXPokjTDU/edit?usp=drive_link&ouid=102079193388774772467&rtpof=true&sd=true" target="blank">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}

            >
              Hire Me
            </button>
            </a>
            

            <a href="https://drive.google.com/file/d/1rqCYdAfWH2oWCmu4Gg5AQnFJJDO96yyG/view?usp=drive_link" target="_blank">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
