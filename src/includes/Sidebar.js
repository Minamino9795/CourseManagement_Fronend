import React from 'react';
import { Link } from "react-router-dom";

function Sidebar(props) {
    return (
       <>
       <>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <div className="aside-menu overflow-hidden">
    <nav id="stacked-menu" className="stacked-menu">
      <ul className="menu">
        <li className="menu-item">
          <a href="index.html" className="menu-link">
            <span className="menu-icon fas fa-home" />
            <span className="menu-text">Trang chủ</span>
          </a>
        </li>
        <li className="menu-item has-child">
          <a href="#" className="menu-link">
            <span className="menu-icon far fa-file" />
            <span className="menu-text">Khóa học</span>
          </a>
          <ul className="menu">
            <li className="menu-item">
              <a href="page-clients.html" className="menu-link">
                Clients
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item has-child">
          <a href="#" className="menu-link">
            <span className="menu-icon fas fa-cat" />
            <span className="menu-text">Auth</span>
          </a>
          <ul className="menu">
            <li className="menu-item">
              <a href="auth-comingsoon-v1.html" className="menu-link">
                Coming Soon v1
              </a>
            </li>
            <li className="menu-item">
              <a href="auth-comingsoon-v2.html" className="menu-link">
                Coming Soon v2
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item has-child">
          <a href="#" className="menu-link">
            <span className="menu-icon fas fa-dog" />
            <span className="menu-text">User</span>
          </a>
          <ul className="menu">
            <li className="menu-item">
              <a href="user-profile.html" className="menu-link">
                Profile
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="landing-page.html" className="menu-link">
            <span className="menu-icon fas fa-rocket" />
            <span className="menu-text">Landing Page</span>
          </a>
        </li>
        <li className="menu-header">Interfaces </li>
        <li className="menu-item has-child">
          <a href="#" className="menu-link">
            <span className="menu-icon fas fa-phone" />
            <span className="menu-text">Components</span>
          </a>
          <ul className="menu">
            <li className="menu-item">
              <a href="component-general.html" className="menu-link">
                General
              </a>
            </li>
            <li className="menu-item">
              <a href="component-icons.html" className="menu-link">
                Icons
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item has-child">
          <a href="#" className="menu-link">
            <span className="menu-icon fas fa-rocket" />
            <span className="menu-text">Forms</span>
          </a>
          <ul className="menu">
            <li className="menu-item">
              <a href="form-basic.html" className="menu-link">
                Basic Elements
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item has-child">
          <a href="#" className="menu-link">
            <span className="menu-icon fas fa-rocket" />
            <span className="menu-text">Collections</span>
          </a>
          <ul className="menu">
            <li className="menu-item">
              <a href="collection-jqvmap.html" className="menu-link">
                Vector Map
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</>

       </>
    );
}

export default Sidebar;