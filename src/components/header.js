import React from "react";
import { useLocation } from "react-router-dom";
import ConnectWallet from "./connectWallet";

const Header = () => {
    const location = useLocation();
    return (
        <>
            <div className="header">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-end">
                            <div className="col">
                                <h6 className="header-pretitle text-white">
                                    Welcome to <span className="carbon_light_green_text">dev Admin Portal !</span>
                                </h6>
                                <h1 className="header-title">
                                    Hello, <span style={{ color: '#ACD24F' }}>Jagannath Vittal 👋</span>
                                </h1>
                            </div>
                            <div className="col-auto">
                                {location?.pathname !== "/wallet" && <ConnectWallet />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header