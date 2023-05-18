import React from "react";
import dp from "../assets/dp.jpg";
import insta from "../assets/instaIcon.png";
import linkedin from "../assets/linkedinIcon.png";
import gmail from "../assets/gmailIcon.png";
import GoToTop from "../utils/gotoTop";
const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutHeader">
          <div className="aboutHeaderInner">Hi. I'm Harshit Gaur</div>
          <div className="aboutHeaderBorder"></div>
        </div>
        <div className="aboutBody">
          <div className="aboutBodyLeft">
            <img src={dp} className="dpImg"></img>
          </div>
          <div className="aboutBodyRight">
            <div className="aboutSection">
              I'm a tech enthusiast 👻, and i love designing websites.
            </div>
            <div>
              <div className="aboutSectionBodyHeading">More about me</div>
              <div>
                <ul className="aboutSectionBodyDesc">
                  <li>👀 I’m interested in web designing and developement</li>
                  <li>🌱 I’m currently learning React Js</li>
                  <li>⚡ Want to know more about Backend develepment</li>
                  <li>💞️ I’m looking to collaborate on web dev projects</li>
                  <li>📫 Reach me via : gaurharshit4@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="socialSection">
          Connect with me on :
          <div>
            <a href="https://linkedin.com/in/harshitgaur19" target="_blank">
              <img src={linkedin} />
            </a>
            <a href="https://instagram.com/_harshitz" target="_blank">
              <img src={insta} />
            </a>
            <a href="mailto::gaurharshit4@gmail.com" target="_blank">
              <img src={gmail} />
            </a>
          </div>
        </div>
      </div>
      <GoToTop />
    </>
  );
};

export default About;

{
  /* 
  import { Outlet } from "react-router-dom";
  <Outlet />
  Instead of using outlet we can simply import the <Profile /> component 
*/
}
