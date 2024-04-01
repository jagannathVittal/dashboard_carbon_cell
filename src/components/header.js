import React from "react";
import { useLocation } from "react-router-dom";
import ConnectWallet from "./connectWallet";

const Header = () => {
    const location = useLocation();
    return (
        <>
            <div class="header">
                <div class="container-fluid">
                    <div class="header-body">
                        <div class="row align-items-end">
                            <div class="col">
                                <h6 class="header-pretitle text-white">
                                    Welcome to <span className="carbon_light_green_text">dev Admin Portal !</span>
                                </h6>
                                <h1 class="header-title">
                                    Hello, <span style={{ color: '#ACD24F' }}>Jagannath Vittal 👋</span>
                                </h1>
                            </div>
                            <div class="col-auto">
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