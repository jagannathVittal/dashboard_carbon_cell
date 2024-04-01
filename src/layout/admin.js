import React from "react";
import SideNav from "../components/sideNav";
import { Outlet } from 'react-router-dom'
import Header from "../components/header";
const MainLayout = () => {
    return (
        <>
            <SideNav />
            <div className="main-content carbon_main_layout">
                <div className="container-fluid"><Header /></div>
                <div className="container-fluid"><Outlet /></div>
            </div>
        </>
    )
}

export default MainLayout