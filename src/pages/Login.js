import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import UserModel from '../models/UserModel';
import Header from '../includes/Header';
import Footer from '../includes/Footer';

const SignupSchema = Yup.object().shape({
    email: Yup.string().required("Vui lòng nhập email !"),
    password: Yup.string().required("Vui lòng nhập mật khẩu !"),
});

const initialValues = {
    email: "",
    password: "",
};
function Login(props) {
    const navigate = useNavigate();
    const handleSubmit = (values) => {
        UserModel.login(values)
            .then((res) => {
                UserModel.setCookie("customer", JSON.stringify(res.user), res.expires_in);
                localStorage.setItem("token", res.access_token);
                navigate("/checkout");

                handleLoginSuccess();
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Đăng nhập thất bại',

                    showConfirmButton: false,
                    timer: 1500, 
                    timerProgressBar: true, 
                    toast: true, 
                    showClass: {
                        popup: 'swal2-noanimation',
                        backdrop: 'swal2-noanimation',
                    },
                    hideClass: {
                        popup: '',
                        backdrop: '',
                    },
                });
            });
    };
    const handleLoginSuccess = () => {
        Swal.fire({
            icon: 'success',
            title: 'Đăng nhập thành công',

            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true, 
            toast: true, 
            showClass: {
                popup: 'swal2-noanimation',
                backdrop: 'swal2-noanimation',
            },
            hideClass: {
                popup: '',
                backdrop: '',
            },
        });

    };
    return (
        <div>
            <Header />
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
                                        href="/register"
                                        data-bs-target="#registerModal"
                                    >
                                        Đăng ký miễn phí
                                    </a>
                                </p>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={SignupSchema}
                                onSubmit={handleSubmit}>

                                <Form action="#">
                                    <div className="login__form">
                                        <label className="form__label">Nhập E-mail</label>
                                        <Field
                                            className="common__login__input"
                                            type="email"
                                            placeholder="Nhập vào email"
                                            name='email'
                                        />
                                        <ErrorMessage name="email" component="div" className="error-message" style={{ color: 'red' }} />
                                    </div>
                                    <div className="login__form">
                                        <label className="form__label">Mật khẩu</label>
                                        <Field
                                            className="common__login__input"
                                            type="password"
                                            placeholder="Nhập mật khẩu"
                                            name='password'
                                        />
                                        <ErrorMessage name="password" component="div" className="error-message" style={{ color: 'red' }} />
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
                                        <button type="submit" className="default__button full-width-button">Log In</button>
                                    </div>



                                </Form>
                            </Formik>

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
                        className="hero__shape hero__shape__4"
                        src="img/education/hero_shape5.png"
                        alt="Shape"
                    />
                </div>
            </div>
            <Footer />

        </div >
    );
}

export default Login;