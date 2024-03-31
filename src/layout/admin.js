import React from "react";
import SideNav from "../components/sideNav";
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
    return (
        <>
            <SideNav />
            <div className="main-content carbon_main_layout">
                <div className="container-fluid"><Outlet /></div>
            </div>
        </>
    )
}

export default MainLayout