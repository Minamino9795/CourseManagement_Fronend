import React from "react";
import Master from "../layouts/Master";

function Home(props) {
  return (
    <Master>
      <div className="herobannerarea herobannerarea__box">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="herobannerarea__content__wraper">
                <div className="herobannerarea__title">
                  <div className="herobannerarea__small__title">
                    <span>Education Solution</span>
                  </div>
                  <div className="herobannerarea__title__heading__2">
                    <h2>Cloud-based LMS Trusted by 1000+</h2>
                  </div>
                </div>
                <div className="herobannerarea__text">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing typesetting
                    industry. Lorem Ipsum has been{" "}
                  </p>
                </div>
                <div className="hreobannerarea__button">
                  <a className="herobannerarea__button__1" href="#">
                    View Courses
                  </a>
                  <a className="herobannerarea__button__2" href="#">
                    Find out more
                    <i className="icofont-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="aboutarea__img__inner text-center">
                <div
                  className="aboutarea__img"
                  data-tilt=""
                  style={{
                    willChange: "transform",
                    transform:
                      "perspective(2000px) rotateX(0deg) rotateY(0deg)",
                  }}
                >
                  <img
                    loading="lazy"
                    className="aboutimg__1"
                    src="img/about/about_8.png"
                    alt="aboutimg"
                  />
                  <img
                    loading="lazy"
                    className="aboutimg__2"
                    src="img/about/about_1.png"
                    alt="aboutimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="herobannerarea__icon">
          <img
            loading="lazy"
            className="hero__icon__1"
            src="img/register/register__2.png"
            alt="photo"
          />
          <img
            loading="lazy"
            className="hero__icon__2"
            src="img/herobanner/herobanner__6.png"
            alt="photo"
          />
          <img
            loading="lazy"
            className="hero__icon__3"
            src="img/herobanner/herobanner__7.png"
            alt="photo"
          />
          <img
            loading="lazy"
            className="hero__icon__4"
            src="img/herobanner/herobanner__7.png"
            alt="photo"
          />
        </div>
      </div>
    </Master>
  );
}

export default Home;
