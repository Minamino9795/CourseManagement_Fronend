import React, { useEffect, useState } from "react";
import Master from "../layouts/Master";
import axios from "axios";
import { VND } from "../extention/format";

function Home(props) {
  const [courses, setProducts] = useState([]);
  const Urlnumber = 'http://127.0.0.1:8000/';

  useEffect(() => {
    // Gọi API để lấy danh sách sản phẩm
    axios.get('http://127.0.0.1:8000/api/courses')
      .then(response => {
        setProducts(response.data);
        console.log(response);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);
  const [visibleProducts, setVisibleProducts] = useState(3);

  // Hàm xử lý khi nhấn vào nút "Show more"
  const handleShowMore = () => {
    setVisibleProducts(visibleProducts + 3);
  };

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
      <div className="brandarea__2">
        <div className="container">
          <div className="row aos-init aos-animate" data-aos="fade-up">
            <div className="brandarea__wraper brandarea__wraper__2">
              <div className="brandarea__img">
                <a href="#">
                  <img loading="lazy" src="img/brand/brand_1.png" alt="brand" />
                </a>
              </div>
              <div className="brandarea__img">
                <a href="#">
                  <img loading="lazy" src="img/brand/brand_2.png" alt="brand" />
                </a>
              </div>
              <div className="brandarea__img">
                <a href="#">
                  <img loading="lazy" src="img/brand/brand_3.png" alt="brand" />
                </a>
              </div>
              <div className="brandarea__img">
                <a href="#">
                  <img loading="lazy" src="img/brand/brand_4.png" alt="brand" />
                </a>
              </div>
              <div className="brandarea__img">
                <a href="#">
                  <img loading="lazy" src="img/brand/brand_5.png" alt="brand" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutarea__2 sp_top_30">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="about__right__wraper__2">
                <div
                  className="educationarea__img"
                  data-tilt=""
                  style={{
                    willChange: "transform",
                    transform:
                      "perspective(2000px) rotateX(0deg) rotateY(0deg)",
                  }}
                >
                  <img
                    loading="lazy"
                    className="aboutarea__2__img__1"
                    src="img/about/about_2.png"
                    alt="education"
                  />
                  <img
                    loading="lazy"
                    className="aboutarea__2__img__2"
                    src="img/about/about_3.png"
                    alt="education"
                  />
                  <img
                    loading="lazy"
                    className="aboutarea__2__img__3"
                    src="img/about/about_4.png"
                    alt="education"
                  />
                  <img
                    loading="lazy"
                    className="aboutarea__2__img__4"
                    src="img/about/about_11.png"
                    alt="education"
                  />
                </div>
                <div className="aboutarea__2__text">
                  <div className="aboutarea__counter">
                    <span className="counter">17</span> +
                  </div>
                  <p>YEARS EXPERIENCE JUST ACHIVED</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="aboutarea__content__wraper">
                <div className="aboutarea__button">
                  <div className="default__small__button">About Us</div>
                </div>
                <div className="aboutarea__headding heading__underline">
                  <h2>
                    Welcome to the <span>Online</span> Learning Center
                  </h2>
                </div>
                <div className="aboutarea__para aboutarea__para__2">
                  <p>
                    25+Contrary to popular belief, Lorem Ipsum is not simply
                    random text roots in a piece of classical Latin literature
                    from 45 BC
                  </p>
                </div>
                <div className="aboutarea__list__2">
                  <ul>
                    <li>
                      <i className="icofont-check" /> Lorem Ipsum is simply
                      dummy
                    </li>
                    <li>
                      <i className="icofont-check" /> Explore a variety of fresh
                      educational teach
                    </li>
                    <li>
                      <i className="icofont-check" /> Lorem Ipsum is simply
                      dummy text of
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="counterarea sp_bottom_100 sp_top_50">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="counterarea__text__wraper">
                <div className="counter__img">
                  <img
                    loading="lazy"
                    src="img/counter/counter__1.png"
                    alt="counter"
                  />
                </div>
                <div className="counter__content__wraper">
                  <div className="counter__number">
                    <span className="counter">8</span>+
                  </div>
                  <p>Total Acheivment</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="counterarea__text__wraper">
                <div className="counter__img">
                  <img
                    loading="lazy"
                    src="img/counter/counter__2.png"
                    alt="counter"
                  />
                </div>
                <div className="counter__content__wraper">
                  <div className="counter__number">
                    <span className="counter">43</span>+
                  </div>
                  <p>TOTAL STUDENTS</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="counterarea__text__wraper">
                <div className="counter__img">
                  <img
                    loading="lazy"
                    src="img/counter/counter__3.png"
                    alt="counter"
                  />
                </div>
                <div className="counter__content__wraper">
                  <div className="counter__number">
                    <span className="counter">3</span>k
                  </div>
                  <p>tOTAL INSTRUCTOR</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="counterarea__text__wraper">
                <div className="counter__img">
                  <img
                    loading="lazy"
                    src="img/counter/counter__4.png"
                    alt="counter"
                  />
                </div>
                <div className="counter__content__wraper">
                  <div className="counter__number">
                    <span className="counter">64</span>+
                  </div>
                  <p>OVER THE WORLD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="gridarea gridarea__2">
        <div className="container">
          <div className="row grid__row">
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12" data-aos="fade-up">
              <div className="section__title__2">
                <div className="section__title__button">
                  <div className="default__small__button">Danh sách khóa học</div>
                </div>
                <div className="section__title__heading__2 section__title__heading__3 heading__fontsize__2">
                  <h2>Khóa học trực tuyến hoàn hảo của bạn</h2>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12" data-aos="fade-up">
              <div className="gridfilter_nav grid__filter__2 gridFilter">




              </div>
            </div>
          </div>



          <div className="row grid" data-aos="fade-up">
            {courses.slice(0, visibleProducts).map((course) => (
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter1 filter3">
                <div className="gridarea__wraper">
                  <div className="gridarea__img">
                    <a href="course-details.html">
                      {Urlnumber + course.image_url}
                    </a>

                    <div className="gridarea__small__icon">
                      <a href="#">
                        <i className="icofont-heart-alt" />
                      </a>
                    </div>
                  </div>
                  <div className="gridarea__content">
                    <div className="gridarea__list">
                      <ul>
                        <li>
                          <i className="icofont-book-alt" /> 23 Lesson
                        </li>
                        <li>
                          <i className="icofont-clock-time" /> 1 hr 30 min
                        </li>
                      </ul>
                    </div>
                    <div className="gridarea__heading">
                      <h3>
                        <a href="course-details.html">
                          {course.name}
                        </a>
                      </h3>
                    </div>
                    <div className="gridarea__price">
                      {course.price === 0 ? (
                        <>
                          Miễn phí
                        </>
                      ) : (
                        <>
                          {VND.format(course.price)} <del> / {VND.format(course.price + 500000)}</del>
                          <span>
                            {" "}
                            <del className="del__2">Free</del>
                          </span>
                        </>
                      )}
                    </div>

                    <div className="gridarea__bottom">

                      <div className="gridarea__star">
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <span>(5k)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {visibleProducts < courses.length && (
              <div className="col-12 text-center m-3">
                <button className="btn btn-warning load-more-product" onClick={handleShowMore}>
                  Show more
                </button>
              </div>
            )}

          </div>
        </div>
      </div>

    </Master>


  );
}

export default Home;
