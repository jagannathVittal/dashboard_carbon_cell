import React from "react";

const Header = () => {
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
                                <a href="#!" class="btn carbon_light_green lift">
                                    Launch Wallet
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Header