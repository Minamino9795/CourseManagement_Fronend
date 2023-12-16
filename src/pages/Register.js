import React from 'react';
import Footer from '../includes/Footer';
import Header from '../includes/Header';
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import UserModel from '../models/UserModel';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Vui lòng nhập tên!"),
    email: Yup.string().required("Vui lòng nhập email!"),
    phone: Yup.number().required("Vui lòng nhập số điện thoại!"),
    address: Yup.string().required("Vui lòng nhập địa chỉ!"),
    gender: Yup.string().required("Vui lòng chọn giới tính!"),
    birthday: Yup.date().required("Vui lòng nhập ngày sinh của bạn!"),
    password: Yup.string().required("Vui lòng nhập mật khẩu!"),
    repeatpassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Mật khẩu nhập lại không khớp')
        .required('Vui lòng nhập lại mật khẩu'),
});

const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    birthday: "",
    password: "",
    repeatpassword: "",
};
function Register(props) {
    const navigate = useNavigate();
    const handleSubmit = (values) => {
        console.log("có nhấn nút submit", values);
        UserModel.register(values)
            .then((res) => {              
                handleRegisterSuccess();
                navigate("/login");
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Email đã tồn tại',

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

    const handleRegisterSuccess = () => {
        Swal.fire({
            icon: 'success',
            title: 'Đăng ký thành công vui lòng đăng nhập',

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
                                    <h2 className="heading">Register</h2>
                                </div>
                                <div className="breadcrumb__inner">
                                    <ul>
                                        <li>
                                            <a href="index.html">Trang chủ</a>
                                        </li>
                                        <li>Đăng ký</li>
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
                                <h5 className="login__title">Đăng Ký</h5>
                                <p className="login__description">
                                    Bạn đã có tài khoản?{" "}
                                    <a
                                        href="/login"                                       
                                        data-bs-target="#registerModal"
                                    >
                                        Đăng nhập
                                    </a>
                                </p>
                            </div>
                    <Formik
                                initialValues={initialValues}
                                validationSchema={SignupSchema}
                                onSubmit={handleSubmit}>
                            
                                <Form action="#">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="login__form">
                                                <label className="form__label">Tên tài khoản</label>
                                                <Field
                                                    className="common__login__input"
                                                    type="text"
                                                    placeholder="Nhập tên"
                                                    name='name'
                                                />
                                                <ErrorMessage name="name" component="div" className="error-message" style={{ color: 'red' }} />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="login__form">
                                                <label className="form__label">Email</label>
                                                <Field
                                                    className="common__login__input"
                                                    type="email"
                                                    placeholder="Nhập email"
                                                    name='email'
                                                />
                                                <ErrorMessage name="email" component="div" className="error-message" style={{ color: 'red' }} />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="login__form">
                                                <label className="form__label">Số điện thoại</label>
                                                <Field
                                                    className="common__login__input"
                                                    type="number"
                                                    placeholder="Nhập số điện thoại"
                                                    name='phone'
                                                />
                                                <ErrorMessage name="phone" component="div" className="error-message" style={{ color: 'red' }} />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
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
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="login__form">
                                                <label className="form__label">Nhập lại mật khẩu</label>
                                                <Field
                                                    className="common__login__input"
                                                    type="password"
                                                    placeholder="Nhập lại mật khẩu"
                                                    name='repeatpassword'
                                                />
                                                <ErrorMessage name="repeatpassword" component="div" className="error-message" style={{ color: 'red' }} />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="login__form">
                                                <label className="form__label">Nhập địa chỉ</label>
                                                <Field
                                                    className="common__login__input"
                                                    type="text"
                                                    placeholder="Nhập địa chỉ"
                                                    name='address'
                                                />
                                                <ErrorMessage name="address" component="div" className="error-message" style={{ color: 'red' }} />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="login__form">
                                                <label className="form__label">Giới tính</label>
                                                <Field
                                                    className="common__login__input"
                                                    as="select"
                                                    name="gender"
                                                >
                                                    <option value="">--vui lòng chọn--</option>
                                                    <option value="nam">Nam</option>
                                                    <option value="nu">Nữ</option>
                                                </Field>
                                                <ErrorMessage name="gender" component="div" className="error-message" style={{ color: 'red' }} />
                                            </div>
                                        </div>

                                        <div className="col-xl-6">
                                            <div className="login__form">
                                                <label className="form__label">Ngày sinh</label>
                                                <Field
                                                    className="common__login__input"
                                                    type="date"
                                                    placeholder="Nhập ngày sinh"
                                                    name='birthday'
                                                />
                                                <ErrorMessage name="birthday" component="div" className="error-message" style={{ color: 'red' }} />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="login__button">
                                        <button type="submit" className="default__button full-width-button">Đăng ký</button>
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
        </div>
    );
}

export default Register;