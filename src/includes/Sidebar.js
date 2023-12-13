import React from 'react';

function Sidebar(props) {
    return (
        <div>
            <div className="aside-menu overflow-hidden">
                <nav id="stacked-menu" className="stacked-menu">
                    <ul className="menu">
                        <li className="menu-item">
                            <a href="index.html" className="menu-link">
                                <span className="menu-icon fas fa-home" />{" "}
                                <span className="menu-text">Dashboard</span>
                            </a>
                        </li>
                        <li className="menu-item has-child">
                            <a href="#" className="menu-link">
                                <span className="menu-icon far fa-file" />{" "}
                                <span className="menu-text">App Pages</span>{" "}
                                <span className="badge badge-warning">New</span>
                            </a>{" "}
                            {/* child menu */}
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
                                Project
                            </a>
                            <ul className="menu">
                                <li className="menu-item">
                                    <a href="page-project.html" className="menu-link">
                                        Overview
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>


        </div>
    );
}

export default Sidebar;