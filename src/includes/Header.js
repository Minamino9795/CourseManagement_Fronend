import React from "react";
import Sidebar from "./Sidebar";

function Header(props) {
    return (
        <div>
            <header>
                <div className="headerarea headerarea__2 header__sticky header__area">
                    <div className="container desktop__menu__wrapper">
                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-md-6">
                                <div className="headerarea__left">
                                    <div className="headerarea__left__logo">
                                        <a href="index.html">
                                            <img
                                                loading="lazy"
                                                src="img/logo/logo_1.png"
                                                alt="logo"
                                            />
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
                                                    href="course.html"
                                                >
                                                    Courses
                                                    <i className="icofont-rounded-down" />{" "}
                                                </a>
                                                <div className="headerarea__submenu mega__menu__wrapper">
                                                    <div className="row">
                                                        <div className="col-3 mega__menu__single__wrap">
                                                            <h4 className="mega__menu__title">
                                                                <a href="#">Get Started 1 </a>
                                                            </h4>
                                                            <ul className="mega__menu__item">
                                                                <li>
                                                                    <a href="course.html">
                                                                        Grid{" "}
                                                                        <span className="mega__menu__label">
                                                                            All Courses
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="course-dark.html">
                                                                        Course Grid (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="course-grid.html">Course Grid</a>
                                                                </li>
                                                                <li>
                                                                    <a href="course-grid-dark.html">
                                                                        Course Grid (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="course-list.html">Course List</a>
                                                                </li>
                                                                <li>
                                                                    <a href="course-list-dark.html">
                                                                        Course List (Dark)
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-3 mega__menu__single__wrap">
                                                            <h4 className="mega__menu__title">
                                                                <a href="#">Get Started 2 </a>
                                                            </h4>
                                                            <ul className="mega__menu__item">
                                                                <li>
                                                                    <a href="course-details.html">
                                                                        Course Details
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="course-details-dark.html">
                                                                        Course Details (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="course-details-2.html">
                                                                        Course Details 2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="course-details-2-dark.html">
                                                                        Details 2 (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="course-details-3.html">
                                                                        Course Details 3
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="course-details-3.html">
                                                                        Details 3 (Dark)
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-3 mega__menu__single__wrap">
                                                            <h4 className="mega__menu__title">
                                                                <a href="#">Get Started 3</a>
                                                            </h4>
                                                            <ul className="mega__menu__item">
                                                                <li>
                                                                    <a href="dashboard/become-an-instructor.html">
                                                                        Become An Instructor
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="dashboard/create-course.html">
                                                                        Create Course{" "}
                                                                        <span className="mega__menu__label">
                                                                            Career
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="instructor.html">Instructor</a>
                                                                </li>
                                                                <li>
                                                                    <a href="instructor-dark.html">
                                                                        Instructor (Dark)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="instructor-details.html">
                                                                        Instructor Details
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="lesson.html">
                                                                        Course Lesson
                                                                        <span className="mega__menu__label new">
                                                                            New
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-3 mega__menu__single__wrap">
                                                            <div className="mega__menu__img">
                                                                <a href="#">
                                                                    <img
                                                                        loading="lazy"
                                                                        src="img/mega/mega_menu_1.png"
                                                                        alt="Mega Menu"
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a
                                                    className="headerarea__has__dropdown"
                                                    href="dashboard/instructor-dashboard.html"
                                                >
                                                    Dashboard
                                                    <i className="icofont-rounded-down" />
                                                </a>
                                                <ul className="headerarea__submenu headerarea__submenu--third--wrap">
                                                    <li>
                                                        <a href="../admin-dashboard.html">
                                                            Admin <i className="icofont-rounded-right" />
                                                        </a>
                                                        <ul className="headerarea__submenu--third">
                                                            <li>
                                                                <a href="dashboard/admin-dashboard.html">
                                                                    Admin Dashboard
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/admin-profile.html">
                                                                    Admin Profile
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/admin-message.html">
                                                                    Message
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/admin-course.html">
                                                                    Courses
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/admin-reviews.html">
                                                                    Review
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/admin-quiz-attempts.html">
                                                                    Admin Quiz
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/admin-settings.html">
                                                                    Settings
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="dashboard/instructor-dashboard.html">
                                                            Instructor <i className="icofont-rounded-right" />
                                                        </a>
                                                        <ul className="headerarea__submenu--third">
                                                            <li>
                                                                <a href="dashboard/instructor-dashboard.html">
                                                                    Inst. Dashboard
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/instructor-profile.html">
                                                                    Inst. Profile
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/instructor-message.html">
                                                                    Message
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/instructor-wishlist.html">
                                                                    Wishlist
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/instructor-reviews.html">
                                                                    Review
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/instructor-my-quiz-attempts.html">
                                                                    My Quiz
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/instructor-order-history.html">
                                                                    Order History
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/instructor-course.html">
                                                                    My Courses
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/instructor-announcments.html">
                                                                    Announcements
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/instructor-quiz-attempts.html">
                                                                    Quiz Attempts
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/instructor-assignments.html">
                                                                    Assignment
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/instructor-settings.html">
                                                                    Settings
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="dashboard/student-dashboard.html">
                                                            Student <i className="icofont-rounded-right" />
                                                        </a>
                                                        <ul className="headerarea__submenu--third">
                                                            <li>
                                                                <a href="dashboard/student-dashboard.html">
                                                                    Dashboard
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/student-profile.html">
                                                                    Profile
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/student-message.html">
                                                                    Message
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/student-enrolled-courses.html">
                                                                    Enrolled Courses
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/student-wishlist.html">
                                                                    Wishlist
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/student-reviews.html">
                                                                    Review
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/student-my-quiz-attempts.html">
                                                                    My Quiz
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/student-assignments.html">
                                                                    Assignment
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard/student-settings.html">
                                                                    Settings
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a
                                                    className="headerarea__has__dropdown"
                                                    href="ecommerce/shop.html"
                                                >
                                                    eCommerce
                                                    <i className="icofont-rounded-down" />
                                                </a>
                                                <ul className="headerarea__submenu">
                                                    <li>
                                                        <a href="ecommerce/shop.html">
                                                            Shop
                                                            <span className="mega__menu__label">
                                                                Online Store
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="ecommerce/product-details.html">
                                                            Product Details
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="ecommerce/cart.html">Cart</a>
                                                    </li>
                                                    <li>
                                                        <a href="ecommerce/checkout.html">Checkout</a>
                                                    </li>
                                                    <li>
                                                        <a href="ecommerce/wishlist.html">Wishlist</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="headerarea__right">
                                    <div className="header__cart">
                                        <a href="#">
                                            {" "}
                                            <i class="icofont-cart-alt"></i>
                                        </a>
                                        <div className="header__right__dropdown__wrapper">
                                            <div className="header__right__dropdown__inner">
                                                <div className="single__header__right__dropdown">
                                                    <div className="header__right__dropdown__img">
                                                        <a href="#">
                                                            <img
                                                                loading="lazy"
                                                                src="img/grid/cart1.jpg"
                                                                alt="photo"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="header__right__dropdown__content">
                                                        <a href="shop-product.html">Web Directory</a>
                                                        <p>
                                                            1 x <span className="price">$ 80.00</span>
                                                        </p>
                                                    </div>
                                                    <div className="header__right__dropdown__close">
                                                        <a href="#">
                                                            <i className="icofont-close-line" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="dropdown__price">
                                                Total: <span>$1,100.00</span>
                                            </p>
                                            <div className="header__right__dropdown__button">
                                                <a href="ecommerce/cart.html" className="white__color">
                                                    View Cart
                                                </a>
                                                <a
                                                    href="ecommerce/checkout.html"
                                                    className="blue__color"
                                                >
                                                    Checkout
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="headerarea__login">
                                        <a href="login.html">
                                            <i className="icofont-user-alt-5" />
                                        </a>
                                    </div>
                                    <div className="headerarea__button">
                                        <a href="#">Get Start</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mob_menu_wrapper">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="mobile-logo">
                                    <a className="logo__dark" href="#">
                                        <img loading="lazy" src="img/logo/logo_1.png" alt="logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="header-right-wrap">
                                    <div className="headerarea__right">
                                        <div className="header__cart">
                                            <a href="#">
                                                {" "}
                                                <i className="icofont-cart-alt" />
                                            </a>
                                            <div className="header__right__dropdown__wrapper">
                                                <div className="header__right__dropdown__inner">
                                                    <div className="single__header__right__dropdown">
                                                        <div className="header__right__dropdown__img">
                                                            <a href="#">
                                                                <img
                                                                    loading="lazy"
                                                                    src="img/grid/cart1.jpg"
                                                                    alt="photo"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="header__right__dropdown__content">
                                                            <a href="shop-product.html">Web Directory</a>
                                                            <p>
                                                                1 x <span className="price">$ 80.00</span>
                                                            </p>
                                                        </div>
                                                        <div className="header__right__dropdown__close">
                                                            <a href="#">
                                                                <i className="icofont-close-line" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="single__header__right__dropdown">
                                                        <div className="header__right__dropdown__img">
                                                            <a href="#">
                                                                <img
                                                                    loading="lazy"
                                                                    src="img/grid/cart2.jpg"
                                                                    alt="photo"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="header__right__dropdown__content">
                                                            <a href="shop-product.html">Design Minois</a>
                                                            <p>
                                                                1 x <span className="price">$ 60.00</span>
                                                            </p>
                                                        </div>
                                                        <div className="header__right__dropdown__close">
                                                            <a href="#">
                                                                <i className="icofont-close-line" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="single__header__right__dropdown">
                                                        <div className="header__right__dropdown__img">
                                                            <a href="#">
                                                                <img
                                                                    loading="lazy"
                                                                    src="img/grid/cart3.jpg"
                                                                    alt="photo"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="header__right__dropdown__content">
                                                            <a href="shop-product.html">Crash Course</a>
                                                            <p>
                                                                1 x <span className="price">$ 70.00</span>
                                                            </p>
                                                        </div>
                                                        <div className="header__right__dropdown__close">
                                                            <a href="#">
                                                                <i className="icofont-close-line" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="dropdown__price">
                                                    Total: <span>$1,100.00</span>
                                                </p>
                                                <div className="header__right__dropdown__button">
                                                    <a href="#" className="white__color">
                                                        VIEW CART
                                                    </a>
                                                    <a href="#" className="blue__color">
                                                        CHECKOUT
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mobile-off-canvas">
                                        <a className="mobile-aside-button" href="#">
                                            <i className="icofont-navigation-menu" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
