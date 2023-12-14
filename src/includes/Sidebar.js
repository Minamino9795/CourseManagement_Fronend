import React from 'react';

function Sidebar(props) {
    return (
        <>
            <div className="tution sp_bottom_100 sp_top_50">
                <div className="container-fluid full__width__padding">
                    <div className="row">
                        <div
                            className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12"
                            data-aos="fade-up"
                        >
                            <div
                                className="accordion content__cirriculum__wrap"
                                id="accordionExample"
                            >
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Lesson #01
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <div className="scc__wrap">
                                                <div className="scc__info">
                                                    <i className="icofont-video-alt" />
                                                    <h5>
                                                        {" "}
                                                        <a href="lesson.html">
                                                            <span>Course Intro</span>
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div className="scc__meta">
                                                    <strong>3.27</strong>
                                                    <a href="lesson.html">
                                                        <span className="question">
                                                            <i className="icofont-eye" />
                                                            Preview
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="scc__wrap">
                                                <div className="scc__info">
                                                    <i className="icofont-video-alt" />
                                                    <h5>
                                                        {" "}
                                                        <a href="lesson-2.html">
                                                            <span>Course Outline</span>
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div className="scc__meta">
                                                    <strong>5.00</strong>
                                                    <a href="lesson-2.html">
                                                        <span className="question">
                                                            <i className="icofont-eye" /> Preview
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="scc__wrap">
                                                <div className="scc__info">
                                                    <i className="icofont-file-text" />
                                                    <h5>
                                                        {" "}
                                                        <a href="lesson-course-materials.html">
                                                            <span>Course Materials</span>
                                                        </a>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="scc__wrap">
                                                <div className="scc__info">
                                                    <i className="icofont-audio" />
                                                    <h5>
                                                        {" "}
                                                        <a href="lesson-quiz.html">
                                                            <span>Summer Quiz</span>
                                                        </a>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="scc__wrap">
                                                <div className="scc__info">
                                                    <i className="icofont-file-text" />
                                                    <h5>
                                                        <a href="lesson-assignment.html">
                                                            <span>Assignment</span>
                                                        </a>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            Lesson #02
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <div className="scc__wrap">
                                                <div className="scc__info">
                                                    <i className="icofont-video-alt" />
                                                    <h5>
                                                        {" "}
                                                        <a href="lesson.html">
                                                            <span>Course Intro</span>
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div className="scc__meta">
                                                    <strong>3.27</strong>
                                                    <a href="lesson.html">
                                                        <span className="question">
                                                            <i className="icofont-eye" />
                                                            Preview
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="scc__wrap">
                                                <div className="scc__info">
                                                    <i className="icofont-video-alt" />
                                                    <h5>
                                                        {" "}
                                                        <a href="lesson-2.html">
                                                            <span>Course Outline</span>
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div className="scc__meta">
                                                    <strong>5.00</strong>
                                                    <a href="lesson-2.html">
                                                        <span className="question">
                                                            <i className="icofont-eye" /> Preview
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="scc__wrap">
                                                <div className="scc__info">
                                                    <i className="icofont-video-alt" />
                                                    <h5>
                                                        {" "}
                                                        <a href="lesson-2.html">
                                                            <span>Course Outline</span>
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div className="scc__meta">
                                                    <strong>7.00</strong>
                                                    <a href="lesson-3.html">
                                                        <span className="question">
                                                            <i className="icofont-eye" /> Preview
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="scc__wrap">
                                                <div className="scc__info">
                                                    <i className="icofont-file-text" />
                                                    <h5>
                                                        {" "}
                                                        <a href="lesson-course-materials.html">
                                                            <span>Course Materials</span>
                                                        </a>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="scc__wrap">
                                                <div className="scc__info">
                                                    <i className="icofont-audio" />
                                                    <h5>
                                                        {" "}
                                                        <a href="lesson-quiz.html">
                                                            <span>Summer Quiz</span>
                                                        </a>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="scc__wrap">
                                                <div className="scc__info">
                                                    <i className="icofont-file-text" />
                                                    <h5>
                                                        <a href="lesson-assignment.html">
                                                            <span>Assignment</span>
                                                        </a>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12"
                            data-aos="fade-up"
                        >
                            <div className="lesson__content__main">
                                <div className="lesson__content__wrap">
                                    <h3>Video Content lesson 01</h3>
                                    <span>
                                        <a href="course-details.html">Close</a>
                                    </span>
                                </div>
                                <div className="plyr__video-embed rbtplayer">
                                    <iframe
                                        src="https://www.youtube.com/embed/vHdclsdkp28"
                                        allowFullScreen=""
                                        allow="autoplay"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Sidebar;