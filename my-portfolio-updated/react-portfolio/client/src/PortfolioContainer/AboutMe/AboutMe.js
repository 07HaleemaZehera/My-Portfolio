import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    headingdescription:
      "Software Engineer at ColorTokens Inc(June 2022- Present)",
    description:
      " A Full stack web developer and well-versed in MERN / MEAN stack, along with a knack of building applications with utmost efficiency. As much as I am passionate about coding, I am also a problem solver, a quick learner with a flexible mindset. I would like to work in an organization that offers opportunities to enhance my professional skills and help me grow and develop alongwith it.",
    highlights: {
      bullets: [
        // "Architect the front-end framework which best suits for ColorTokens’s security products.",
        // "Developing reusable common components.",
        // "Own, manage and improve source code management process. Focus on scale and efficiency.",
        // "Apply critical thinking to unpack complex problems",
        // "Prescribe solutions through written narratives and mapped customer journeys.",
        // "Ensure the product is not vulnerable to any attack from the front end.",
        // "Contributing to key user interactions and interfaces for tools across ColorTokens’s modular SaaS platform.",
        // "Will be responsible for identifying and leveraging the best open-source libraries.",
        // "Writing additional custom libraries or library extensions when required.",
        "Full Stack web developer",
        "Interactive Front End as per the design",
        "Specialized in MERN stack",
        "Redux for State Mnanagement",
        "Building REST API",
        "Managing database",
      ],
      heading: "Here are a few highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  // ---------------------------------------------------
  const SCREEN_CONSTSANTS_ = {
    headingdescription: `Software Engineer at ColorTokens Inc
  (June 2022- Present)`,
    description:
      " A Full stack web developer and well-versed in MERN stack with Redux, along with a knack of building applications with utmost efficiency. As much as I am passionate about coding, I am also a problem solver, a quick learner with a flexible mindset. I would like to work in an organization that offers opportunities to enhance my professional skills and help me grow and develop alongwith it.",
    highlights: {
      bullets: [
        "Design, develop, and maintain web applications using MEAN stack technologies (MongoDB, Express.js, Angular, Node.js)",
        "Collaborate with cross-functional teams to gather and define project requirements",
        "Write clean, efficient, and maintainable code for web applications",
        "Create RESTful APIs for seamless integration with frontend applications.",
        "Troubleshoot and debug issues promptly, providing timely solutions.",
        "Stay updated with emerging technologies and industry trends",
        "Participate in code reviews, ensuring code quality and best practices.Contribute to continuous improvement of development processes and methodologies.",
        "Will be responsible for identifying and leveraging the best open-source libraries.",
        "Proficiency in JavaScript, TypeScript, HTML, and CSS.",
        "Experience with frontend frameworks",
        "Familiarity with server-side languages such as Node.js and Express.js",
        " Knowledge of version control systems like Git. Strong problem-solving skills and attention to detail",
        "Excellent communication and collaboration abilities. Experience with Agile development methodologies is a plus.",
      ],
      heading: "Roles and Responsibilities:",
    },
  };
  const renderHighlight_ = () => {
    return SCREEN_CONSTSANTS_.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  // ---------------------------------------------------

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
            <a
                href="https://docs.google.com/document/d/1n7hWYYFk3cYWhpjrgxRkoLKeXPokjTDU/edit?usp=drive_link&ouid=102079193388774772467&rtpof=true&sd=true"
                target="_blank"
              >
                <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              </a>
              <a
                href="https://drive.google.com/file/d/1rqCYdAfWH2oWCmu4Gg5AQnFJJDO96yyG/view?usp=drive_link"
                target="_blank"
              >
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="expirence-box">
        <div className="about-me-parent">
          <ScreenHeading title={"Work Experience"} />
          <div className="exp-about-me-card">
            <div className="exp-about-me-details">
              <span className="about-me-description">
                <h6>
                  <b>{SCREEN_CONSTSANTS_.headingdescription}</b>
                </h6>
              </span>
              {/* <. */}
              {/* <span className="about-me-description">
                {SCREEN_CONSTSANTS.description}
              </span> */}
              <div className="exp-about-me-highlights">
                <div className="exp-highlight-heading">
                  <span>{SCREEN_CONSTSANTS_.highlights.heading}</span>
                </div>
                {renderHighlight_()}
              </div>
              {/* <div className="about-me-options">
              <a href="https://drive.google.com/file/d/1rRReXzTPFhwhJXRrjedbMR97qdQhFmUJ/view?usp=share_link" target="_blank">
                <button className="btn highlighted-btn">Experience Letter</button>
              </a>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
