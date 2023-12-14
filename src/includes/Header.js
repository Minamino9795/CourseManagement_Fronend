import React from 'react';
import Sidebar from './Sidebar';

function Header(props) {
    return (
        <div>
            <>
                <div id="back__preloader">
                    <div id="back__circle_loader" />
                    <div className="back__loader_logo">
                        <img loading="lazy" src="%PUBLIC_URL%/assets/img/pre.png" alt="Preload" />
                    </div>
                </div>
                <div className="mode_switcher my_switcher">
                    <button id="light--to-dark-button" className="light align-items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ionicon dark__mode"
                            viewBox="0 0 512 512"
                        >
                            <path
                                d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={32}
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ionicon light__mode"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeMiterlimit={10}
                                strokeWidth={32}
                                d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
                            />
                            <circle
                                cx={256}
                                cy={256}
                                r={80}
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeMiterlimit={10}
                                strokeWidth={32}
                            />
                        </svg>
                        <span className="light__mode">Light</span>
                        <span className="dark__mode">Dark</span>
                    </button>
                </div>
                <main className="main_wrapper overflow-hidden">
                    <div className="topbararea">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="topbar__left">
                                        <ul>
                                            <li>Call Us: +1 800 123 456 789</li>
                                            <li>- Mail Us: Itcroc@mail.com</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="topbar__right">
                                        <div className="topbar__icon">
                                            <i className="icofont-location-pin" />
                                        </div>
                                        <div className="topbar__text">
                                            <p>684 West College St. Sun City, USA</p>
                                        </div>
                                        <div className="topbar__list">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="icofont-facebook" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="icofont-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="icofont-instagram" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="icofont-youtube-play" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <header>
                        <div className="headerarea headerarea__3 header__sticky header__area">
                            <div className="container desktop__menu__wrapper">
                                <div className="row">
                                    <div className="col-xl-2 col-lg-2 col-md-6">
                                        <div className="headerarea__left">
                                            <div className="headerarea__left__logo">
                                                <a href="index.html">
                                                    <img loading="lazy" src="%PUBLIC_URL%/assets/img/logo/logo_1.png" alt="logo" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 main_menu_wrap">
                                        <div className="headerarea__main__menu">
                                            <nav>
                                                <ul>
                                                    <li className="mega__menu position-static">
                                                        <a
                                                            className="headerarea__has__dropdown"
                                                            href="index.html"
                                                        >
                                                            Demos
                                                            <i className="icofont-rounded-down" />{" "}
                                                        </a>
                                                        <div className="headerarea__submenu mega__menu__wrapper mega__menu__grid__5">
                                                            <ul
                                                                className="nav  tab__button__wrap"
                                                                id="myTab2"
                                                                role="tablist"
                                                            >
                                                                <li className="nav-item" role="presentation">
                                                                    <button
                                                                        className="single__tab__link active"
                                                                        data-bs-toggle="tab"
                                                                        data-bs-target="#projects__light"
                                                                        type="button"
                                                                    >
                                                                        Light
                                                                    </button>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <button
                                                                        className="single__tab__link"
                                                                        data-bs-toggle="tab"
                                                                        data-bs-target="#projects__dark"
                                                                        type="button"
                                                                    >
                                                                        Dark
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                            <div
                                                                className="tab-content tab__content__wrapper"
                                                                id="myTabContent2"
                                                            >
                                                                <div
                                                                    className="tab-pane fade active show"
                                                                    id="projects__light"
                                                                    role="tabpanel"
                                                                    aria-labelledby="projects__light"
                                                                >
                                                                    <div className="row">
                                                                        <div className="col-3 mega__menu__single__wrap">
                                                                            <div className="mega__menu__thumb">
                                                                                <a href="index.html">
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        src="img/mega/home-1.png"
                                                                                        alt="Mega Menu"
                                                                                    />
                                                                                    <span className="mega__menu__thumb__title">
                                                                                        Home (Default)
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-3 mega__menu__single__wrap">
                                                                            <div className="mega__menu__thumb">
                                                                                <a href="home-2.html">
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        src="img/mega/home-2.png"
                                                                                        alt="Mega Menu"
                                                                                    />
                                                                                    <span className="mega__menu__thumb__title">
                                                                                        Home (Elegant)
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-3 mega__menu__single__wrap">
                                                                            <div className="mega__menu__thumb">
                                                                                <a href="home-3.html">
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        src="img/mega/home-3.png"
                                                                                        alt="Mega Menu"
                                                                                    />
                                                                                    <span className="mega__menu__thumb__title">
                                                                                        Home (Classic)
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-3 mega__menu__single__wrap">
                                                                            <div className="mega__menu__thumb">
                                                                                <a href="home-4.html">
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        src="img/mega/home-4.png"
                                                                                        alt="Mega Menu"
                                                                                    />
                                                                                    <span className="mega__menu__thumb__title">
                                                                                        Home (Classic LMS)
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-3 mega__menu__single__wrap">
                                                                            <div className="mega__menu__thumb">
                                                                                <a href="home-5.html">
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        src="img/mega/home-5.png"
                                                                                        alt="Mega Menu"
                                                                                    />
                                                                                    <span className="mega__menu__thumb__title">
                                                                                        Home (Online Course)
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </main>
            </>

        </div>
    );
}

export default Header;