/* eslint-disable */
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
const data = require('../data/Nav.json')
const SideNav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <div data-bs-theme="dark">
                <nav className="navbar navbar-vertical fixed-start navbar-expand-md" id="sidebar">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="d-flex justify-content-between align-items-center">
                            <a className="navbar-brand cursor-pointer" onClick={() => { navigate(`/`) }}>
                                <img src="/img/carbon_cell_logo.png" className="navbar-brand-img mx-auto" alt="carbon_cell_logo" width={100} />
                            </a>
                            <span className="navbar-toggler-icon text-white d-none d-md-block"></span>
                        </div>
                        <div className="collapse navbar-collapse" id="sidebarCollapse">
                            <form className="mt-4 mb-3">
                                <div className="input-group input-group-rounded input-group-merge input-group-reverse">
                                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                                    <div className="input-group-text">
                                        <span className="fe fe-search text-white"></span>
                                    </div>
                                </div>
                            </form>
                            <ul className="navbar-nav">
                                {data && data?.map((elem) => {
                                    return (
                                        <li className="nav-item" key={elem.name}>
                                            <a className={`nav-link cursor-pointer ${elem?.link === location.pathname ? 'active' : ''}`} onClick={() => { navigate(elem?.link) }}>
                                                <i className={`fe fe-${elem?.icon}`}></i>{elem?.name}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                            <ul className="navbar-nav mt-md-4 ">
                                <li className="nav-item cursor-pointer">
                                    <a className="nav-link background_grey" onClick={() => { navigate("/") }}>
                                        <i className="fe fe-bell text-white"></i> Notification<span className="badge ms-auto carbon_light_green"> 2 </span>
                                    </a>
                                </li>
                                <li className="nav-item cursor-pointer">
                                    <a className="nav-link background_grey" onClick={() => { navigate("/") }}>
                                        <i className="fe fe-help-circle text-white"></i> Support
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link background_grey cursor-pointer" onClick={() => { navigate("/") }}>
                                        <i className="fe fe-settings text-white"></i> Setting
                                    </a>
                                </li>
                            </ul>
                            <div className="mt-auto"></div>
                            <div id="popoverDemoContainer" data-bs-theme="dark"></div>
                            <div className="navbar-user d-none d-md-flex" id="sidebarUser">
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default SideNav