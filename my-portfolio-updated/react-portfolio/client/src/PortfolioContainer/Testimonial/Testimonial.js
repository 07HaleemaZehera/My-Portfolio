import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";

// import shape from "../../../src/img/Testimonial/shape-bg.png";
import project2 from "../../../src/img/Testimonial/project2.png";
import project1 from "../../../src/img/Testimonial/project1.png";
import project3 from "../../../src/img/Testimonial/project3.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"some of my construct week project"}
      />

      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <img className="project-img" src={project1} alt="" />
                    </p>
                    <ul className="stars list-unstyled">
                      <div>
                        <p>
                          This is the clone of Desert cart in which I have
                          worked upon different category page,its a
                          collaborative project,executed by 3 in 5 days.
                        </p>
                        <p>Tech Stack : Html | css | javascript</p>

                        <span className="span-1">
                          <a
                            href="https://github.com/07HaleemaZehera/Project-Deser-Cart.git"
                            target="_blank"
                          >
                            <button className="btn-1">Source Code</button>
                          </a>
                        </span>

                        <span>
                          <a
                            href="https://silly-payne-145580.netlify.app/"
                            target="_blank"
                          >
                            <button className="btn-2">Deployment</button>
                          </a>
                        </span>
                      </div>
                    </ul>
                  </div>
                  <div className="flex"></div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <img className="project-img" src={project2} alt="" />
                    </p>
                    <ul className="stars list-unstyled">
                      <div>
                        <p>
                          This is a clone of Shoppers Stop in which I have
                          worked upon different pages and stored users data in
                          local storage.
                        </p>
                        <p>
                          Tech Stack : Html| css| javascript|Mongo
                          db|Express|Node js
                        </p>

                        <span className="span-2">
                          <a
                            href="https://github.com/07HaleemaZehera/Project-2-Clone-Shoppers-Stop.git"
                            target="_blank"
                          >
                            <button className="btn-1">Source Code</button>
                          </a>
                        </span>

                        <span>
                          <a
                            href="https://jovial-bose-95ed42.netlify.app/"
                            target="_blank"
                          >
                            <button className="btn-2">Deployment</button>
                          </a>
                        </span>
                      </div>
                    </ul>
                  </div>
                  <div className="client-info"></div>
                </div>
              </div>

              {/* <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <img className="project-img" src={project4} alt="" />
                    </p>
                    <ul className="stars list-unstyled">
                      <div>
                        <p>
                        This is a Todo-App which can be used to track the 
                        daily work that you schedule
                        and added the deletion and completion functionality, 
                       

                        </p>
                        <p>Tech Stack : ReactJS | css</p>

                        <span className="span-1">
                          <a href="https://github.com/shaheen-ahmad2601/TodoList-reactjs/tree/master/React-TodoList" target="_blank">
                            <button className="btn-1">Source Code</button>
                          </a>
                        </span>

                        <span>
                          <a href="https://aquamarine-piroshki-8eaf30.netlify.app/" target="_blank">
                            <button className="btn-2">Deployment</button>
                          </a>
                        </span>
                      </div>
                    </ul>
                  </div>
                  <div className="flex"></div>
                </div>
              </div> */}

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <img className="project-img" src={project3} alt="" />
                    </p>
                    <ul className="stars list-unstyled">
                      <div>
                        <p>
                          Individual built ecommerce website,Project
                          demonstrates a basic flow of an ecommerce page,where a
                          customer can view & filter and add product to a cart.
                        </p>
                        <p>Tech Stack : MERN |Redux|Material-ui</p>

                        <span className="span-2">
                          <a
                            href="https://github.com/07HaleemaZehera/Haleema_Fashions_Ecommerce.git"
                            target="_blank"
                          >
                            <button className="btn-1">Source Code</button>
                          </a>
                        </span>

                        <span>
                          <a
                            href="https://haleema-fashions.netlify.app/"
                            target="_blank"
                          >
                            <button className="btn-2">Deployment</button>
                          </a>
                        </span>
                      </div>
                    </ul>
                  </div>
                  <div className="client-info"></div>
                </div>
              </div>

              {/* <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <img className="project-img" src={project5} alt="" />
                    </p>
                    <ul className="stars list-unstyled">
                      <div>
                        <p>
                        Project-Nordstrom-Rack . This is an American clothing and accessories product company, in which I've worked upon product pages with some functionality.
                        </p>
                        <p>Tech Stack : React JS | Node JS | CSS</p>

                        <span className="span-2">
                          <a href="https://github.com/shaheen-ahmad2601/Nordstromrack-Clone" target="_blank">
                            <button className="btn-1">Source Code</button>
                          </a>
                        </span>

                        <span>
                          <a href="https://nordstrom-rack.netlify.app/" target="_blank">
                            <button className="btn-2">Deployment</button>
                          </a>
                        </span>
                      </div>
                    </ul>
                  </div>
                  <div className="client-info"></div>
                </div>
              </div> */}
            </OwlCarousel>
          </div>
        </div>
      </section>

      <div className="style-div"></div>
      <div className="style-div1"></div>

      {/* <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div> */}
    </div>
  );
}

{
  /* <div>
  <a href="https://zippy-kitsune-2c37d4.netlify.app/">
    <button>Project</button>
  </a>
</div>; */
}
