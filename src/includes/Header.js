import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <>
<header className="app-header app-header-dark">
  <div className="top-bar">
    <div className="top-bar-brand">
      <button
        className="hamburger hamburger-squeeze mr-2"
        type="button"
        data-toggle="aside-menu"
        aria-label="toggle aside menu"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
    </div>
    
    <div className="top-bar-list">
      <div className="top-bar-item px-2 d-md-none d-lg-none d-xl-none">
        <button
          className="hamburger hamburger-squeeze"
          type="button"
          data-toggle="aside"
          aria-label="toggle menu"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>{" "}
      </div>
      <div className="top-bar-item top-bar-item-full">
      </div>
      <div className="top-bar-item top-bar-item-right px-0 d-none d-sm-flex">
        <ul className="header-nav nav">
          <li className="nav-item dropdown header-nav-dropdown has-notified">
            <a
              className="nav-link"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="oi oi-pulse" />
            </a>{" "}
            <div className="dropdown-menu dropdown-menu-rich dropdown-menu-right">
              <div className="dropdown-arrow" />
              <h6 className="dropdown-header stop-propagation">
                <span>
                  Activities <span className="badge">(2)</span>
                </span>
              </h6>
              <div className="dropdown-scroll perfect-scrollbar">
                <a href="#" className="dropdown-item unread">
                  <div className="user-avatar">
                    <img src="assets/images/avatars/uifaces15.jpg" alt="" />
                  </div>
                  <div className="dropdown-item-body">
                    <p className="text"> Jeffrey Wells created a schedule </p>
                    <span className="date">Just now</span>
                  </div>
                </a>{" "}
                <a href="#" className="dropdown-item unread">
                  <div className="user-avatar">
                    <img src="assets/images/avatars/uifaces16.jpg" alt="" />
                  </div>
                  <div className="dropdown-item-body">
                    <p className="text"> Anna Vargas logged a chat </p>
                    <span className="date">3 hours ago</span>
                  </div>
                </a>{" "}
                <a href="#" className="dropdown-item">
                  <div className="user-avatar">
                    <img src="assets/images/avatars/uifaces17.jpg" alt="" />
                  </div>
                  <div className="dropdown-item-body">
                    <p className="text">
                      {" "}
                      Sara Carr invited to Stilearn Admin{" "}
                    </p>
                    <span className="date">5 hours ago</span>
                  </div>
                </a>{" "}
                <a href="#" className="dropdown-item">
                  <div className="user-avatar">
                    <img src="assets/images/avatars/uifaces18.jpg" alt="" />
                  </div>
                  <div className="dropdown-item-body">
                    <p className="text"> Arthur Carroll updated a project </p>
                    <span className="date">1 day ago</span>
                  </div>
                </a>{" "}
                <a href="#" className="dropdown-item">
                  <div className="user-avatar">
                    <img src="assets/images/avatars/uifaces19.jpg" alt="" />
                  </div>
                  <div className="dropdown-item-body">
                    <p className="text"> Hannah Romero created a task </p>
                    <span className="date">1 day ago</span>
                  </div>
                </a>{" "}
                <a href="#" className="dropdown-item">
                  <div className="user-avatar">
                    <img src="assets/images/avatars/uifaces20.jpg" alt="" />
                  </div>
                  <div className="dropdown-item-body">
                    <p className="text">
                      {" "}
                      Angela Peterson assign a task to you{" "}
                    </p>
                    <span className="date">2 days ago</span>
                  </div>
                </a>{" "}
                <a href="#" className="dropdown-item">
                  <div className="user-avatar">
                    <img src="assets/images/avatars/uifaces21.jpg" alt="" />
                  </div>
                  <div className="dropdown-item-body">
                    <p className="text">
                      {" "}
                      Shirley Mason and 3 others followed you{" "}
                    </p>
                    <span className="date">2 days ago</span>
                  </div>
                </a>{" "}
              </div>
              <a href="user-activities.html" className="dropdown-footer">
                All activities{" "}
                <i className="fas fa-fw fa-long-arrow-alt-right" />
              </a>
            </div>
          </li>
          <li className="nav-item dropdown header-nav-dropdown has-notified">
            <a
              className="nav-link"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="oi oi-envelope-open" />
            </a>{" "}
            <div className="dropdown-menu dropdown-menu-rich dropdown-menu-right">
              <div className="dropdown-arrow" />
              <h6 className="dropdown-header stop-propagation">
                <span>Messages</span> <a href="#">Mark all as read</a>
              </h6>
              <div className="dropdown-scroll perfect-scrollbar">
                <a href="#" className="dropdown-item unread">
                  <div className="user-avatar">
                    <img src="assets/images/avatars/team1.jpg" alt="" />
                  </div>
                  <div className="dropdown-item-body">
                    <p className="subject"> Stilearning </p>
                    <p className="text text-truncate">
                      {" "}
                      Invitation: Joe's Dinner @ Fri Aug 22{" "}
                    </p>
                    <span className="date">2 hours ago</span>
                  </div>
                </a>{" "}
                <a href="#" className="dropdown-item">
                  <div className="user-avatar">
                    <img src="assets/images/avatars/team3.png" alt="" />
                  </div>
                  <div className="dropdown-item-body">
                    <p className="subject"> Openlane </p>
                    <p className="text text-truncate">
                      {" "}
                      Final reminder: Upgrade to Pro{" "}
                    </p>
                    <span className="date">23 hours ago</span>
                  </div>
                </a>{" "}
                <a href="#" className="dropdown-item">
                  <div className="tile tile-circle bg-green"> GZ </div>
                  <div className="dropdown-item-body">
                    <p className="subject"> Gogo Zoom </p>
                    <p className="text text-truncate">
                      {" "}
                      Live healthy with this wireless sensor.{" "}
                    </p>
                    <span className="date">1 day ago</span>
                  </div>
                </a>{" "}
                <a href="#" className="dropdown-item">
                  <div className="tile tile-circle bg-teal"> GD </div>
                  <div className="dropdown-item-body">
                    <p className="subject"> Gold Dex </p>
                    <p className="text text-truncate">
                      {" "}
                      Invitation: Design Review @ Mon Jul 7{" "}
                    </p>
                    <span className="date">1 day ago</span>
                  </div>
                </a>{" "}
                <a href="#" className="dropdown-item">
                  <div className="user-avatar">
                    <img src="assets/images/avatars/team2.png" alt="" />
                  </div>
                  <div className="dropdown-item-body">
                    <p className="subject"> Creative Division </p>
                    <p className="text text-truncate">
                      {" "}
                      Need some feedback on this please{" "}
                    </p>
                    <span className="date">2 days ago</span>
                  </div>
                </a>{" "}
                <a href="#" className="dropdown-item">
                  <div className="tile tile-circle bg-pink"> LD </div>
                  <div className="dropdown-item-body">
                    <p className="subject"> Lab Drill </p>
                    <p className="text text-truncate">
                      {" "}
                      Our UX exercise is ready{" "}
                    </p>
                    <span className="date">6 days ago</span>
                  </div>
                </a>{" "}
              </div>
              <a href="page-messages.html" className="dropdown-footer">
                All messages <i className="fas fa-fw fa-long-arrow-alt-right" />
              </a>
            </div>
          </li>
          <li className="nav-item dropdown header-nav-dropdown">
            <a
              className="nav-link"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="oi oi-grid-three-up" />
            </a>{" "}
            <div className="dropdown-menu dropdown-menu-rich dropdown-menu-right">
              <div className="dropdown-arrow" />
              <div className="dropdown-sheets">
                <div className="dropdown-sheet-item">
                  <a href="#" className="tile-wrapper">
                    <span className="tile tile-lg bg-indigo">
                      <i className="oi oi-people" />
                    </span>{" "}
                    <span className="tile-peek">Teams</span>
                  </a>
                </div>
                <div className="dropdown-sheet-item">
                  <a href="#" className="tile-wrapper">
                    <span className="tile tile-lg bg-teal">
                      <i className="oi oi-fork" />
                    </span>
                    <span className="tile-peek">Projects</span>
                  </a>
                </div>
                <div className="dropdown-sheet-item">
                  <a href="#" className="tile-wrapper">
                    <span className="tile tile-lg bg-pink">
                      <i className="fa fa-tasks" />
                    </span>
                    <span className="tile-peek">Tasks</span>
                  </a>
                </div>
                <div className="dropdown-sheet-item">
                  <a href="#" className="tile-wrapper">
                    <span className="tile tile-lg bg-yellow">
                      <i className="oi oi-fire" />
                    </span>
                    <span className="tile-peek">Feeds</span>
                  </a>
                </div>
                <div className="dropdown-sheet-item">
                  <a href="#" className="tile-wrapper">
                    <span className="tile tile-lg bg-cyan">
                      <i className="oi oi-document" />
                    </span>
                    <span className="tile-peek">Files</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="dropdown d-none d-md-flex">
          <button
            className="btn-account"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="user-avatar user-avatar-md">
              <img src="assets/images/avatars/profile.jpg" alt="" />
            </span>
            <span className="account-summary pr-lg-4 d-none d-lg-block">
              <span className="account-name">PTN</span>
              <span className="account-description">CoureOnline</span>
            </span>
          </button>
          <div className="dropdown-menu">
            <div className="dropdown-arrow d-lg-none" x-arrow="" />
            <div className="dropdown-arrow ml-3 d-none d-lg-block" />
            <h6 className="dropdown-header d-none d-md-block d-lg-none">
              
            </h6>
            <a className="dropdown-item" href="user-profile.html">
              <span className="dropdown-icon oi oi-person" /> Profile
            </a>
            <a className="dropdown-item" href="auth-signin-v1.html">
              <span className="dropdown-icon oi oi-account-logout" /> Logout
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              Help Center
            </a>
            <a className="dropdown-item" href="#">
              Ask Forum
            </a>
            <a className="dropdown-item" href="#">
              Keyboard Shortcuts
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
     </>
     );
 }
 
 export default Header;