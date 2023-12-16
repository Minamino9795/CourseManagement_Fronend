import React from 'react';

function Login(props) {
    return (
        <div>
            <>
                <div className="breadcrumbarea">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="breadcrumb__content__wraper" data-aos="fade-up">
                                    <div className="breadcrumb__title">
                                        <h2 className="heading">Log In</h2>
                                    </div>
                                    <div className="breadcrumb__inner">
                                        <ul>
                                            <li>
                                                <a href="index.html">Trang chủ</a>
                                            </li>
                                            <li>Đăng nhập</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape__icon__2">
                        <img
                            loading="lazy"
                            className=" shape__icon__img shape__icon__img__1"
                            src="img/herobanner/herobanner__1.png"
                            alt="photo"
                        />
                        <img
                            loading="lazy"
                            className=" shape__icon__img shape__icon__img__2"
                            src="img/herobanner/herobanner__2.png"
                            alt="photo"
                        />
                        <img
                            loading="lazy"
                            className=" shape__icon__img shape__icon__img__3"
                            src="img/herobanner/herobanner__3.png"
                            alt="photo"
                        />
                        <img
                            loading="lazy"
                            className=" shape__icon__img shape__icon__img__4"
                            src="img/herobanner/herobanner__5.png"
                            alt="photo"
                        />
                    </div>
                </div>
          
                <div className="loginarea sp_top_100 sp_bottom_100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-md-8 offset-md-2" data-aos="fade-up">
                                <ul
                                    className="nav  tab__button__wrap text-center"
                                    id="myTab"
                                    role="tablist"
                                >
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="single__tab__link active"
                                            data-bs-toggle="tab"
                                            data-bs-target="#projects__one"
                                            type="button"
                                        >
                                            Đăng nhập
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="single__tab__link"
                                            data-bs-toggle="tab"
                                            data-bs-target="#projects__two"
                                            type="button"
                                        >
                                            Đăng ký
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="tab-content tab__content__wrapper"
                                id="myTabContent"
                                data-aos="fade-up"
                            >
                                <div
                                    className="tab-pane fade active show"
                                    id="projects__one"
                                    role="tabpanel"
                                    aria-labelledby="projects__one"
                                >
                                    <div className="col-xl-8 col-md-8 offset-md-2">
                                        <div className="loginarea__wraper">
                                            <div className="login__heading">
                                                <h5 className="login__title">Đăng nhập</h5>
                                                <p className="login__description">
                                                    Bạn vẫn chưa có tài khoản?{" "}
                                                    <a
                                                        href="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#registerModal"
                                                    >
                                                        Đăng ký miễn phí
                                                    </a>
                                                </p>
                                            </div>
                                            <form action="#">
                                                <div className="login__form">
                                                    <label className="form__label">Nhập E-mail</label>
                                                    <input
                                                        className="common__login__input"
                                                        type="text"
                                                        placeholder="Nhập vào email"
                                                    />
                                                </div>
                                                <div className="login__form">
                                                    <label className="form__label">Mật khẩu</label>
                                                    <input
                                                        className="common__login__input"
                                                        type="password"
                                                        placeholder="Nhập mật khẩu"
                                                    />
                                                </div>
                                                <div className="login__form d-flex justify-content-between flex-wrap gap-2">
                                                    <div className="form__check">
                                                        <input id="forgot" type="checkbox" />
                                                        <label htmlFor="forgot"> Ghi nhớ mật khẩu</label>
                                                    </div>
                                                    <div className="text-end login__form__link">
                                                        <a href="#">Quên mật khẩu?</a>
                                                    </div>
                                                </div>
                                                <div className="login__button">
                                                    <a className="default__button" href="#">
                                                       Đăng nhập
                                                    </a>
                                                </div>
                                            </form>
                                            <div className="login__social__option">
                                                <p>hoặc đăng nhập bằng</p>
                                                <ul className="login__social__btn">
                                                    <li>
                                                        <a className="default__button login__button__1" href="#">
                                                            <i className="icofont-facebook" /> facebook
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="default__button" href="#">
                                                            <i className="icofont-google-plus" /> Google
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="projects__two"
                                    role="tabpanel"
                                    aria-labelledby="projects__two"
                                >
                                    <div className="col-xl-8 offset-md-2">
                                        <div className="loginarea__wraper">
                                            <div className="login__heading">
                                                <h5 className="login__title">Đăng ký</h5>
                                                <p className="login__description">
                                                   Bạn đã có tài khoản?{" "}
                                                    <a
                                                        href="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#registerModal"
                                                    >
                                                        Đăng nhập
                                                    </a>
                                                </p>
                                            </div>
                                            <form action="#">
                                                <div className="row">                                                 
                                                    <div className="col-xl-6">
                                                        <div className="login__form">
                                                            <label className="form__label">Tên tài khoản</label>
                                                            <input
                                                                className="common__login__input"
                                                                type="password"
                                                                placeholder="Username"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="login__form">
                                                            <label className="form__label">E-mail</label>
                                                            <input
                                                                className="common__login__input"
                                                                type="email"
                                                                placeholder="Nhập email"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="login__form">
                                                            <label className="form__label">Mật khẩu</label>
                                                            <input
                                                                className="common__login__input"
                                                                type="password"
                                                                placeholder="Nhập mật khẩu"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="login__form">
                                                            <label className="form__label">Nhập lại mật khẩu</label>
                                                            <input
                                                                className="common__login__input"
                                                                type="password"
                                                                placeholder="Nhập lại mật khẩu"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                <div className="login__button">
                                                    <a className="default__button" href="#">
                                                        Đăng ký
                                                    </a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" login__shape__img educationarea__shape_image">
                            <img
                                loading="lazy"
                                className="hero__shape hero__shape__1"
                                src="img/education/hero_shape2.png"
                                alt="Shape"
                            />
                            <img
                                loading="lazy"
                                className="hero__shape hero__shape__2"
                                src="img/education/hero_shape3.png"
                                alt="Shape"
                            />
                            <img
                                loading="lazy"
                                className="hero__shape hero__shape__3"
                                src="img/education/hero_shape4.png"
                                alt="Shape"
                            />
                            <img
                                loading="lazy"
                                className="hero__shape hero__shape__4"
                                src="img/education/hero_shape5.png"
                                alt="Shape"
                            />
                        </div>
                    </div>
                </div>
            </>

        </div>
    );
}

export default Login;