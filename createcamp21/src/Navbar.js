import React from 'react';
import logo from "./avoLogo.svg";
import "./Navbar.css";

/*Navigation bar and logo at the top of every page*/

const Navbar = () => {
    return (        
        <nav class="navbar">
            <div className="container"> 
                <div className="logo"><img src={logo} alt = "Logo" width = "100" height = "100" /></div>
                
                    <div class="nav-item active">
                        <a class="nav-link" href="/"> Balance </a>
                    </div>

                    <div class="nav-item">
                        <a class="nav-link" href="portfolio"> Habits </a>
                    </div>

                    <div class="nav-item">
                        <a class="nav-link" href="portfolio"> Saved </a>
                    </div>

                    <div class="nav-item">
                        <a class="nav-link" href="portfolio"> Review </a>
                    </div>

                    <div class="nav-item">
                        <a class="nav-link" href="portfolio"> Categories </a>
                    </div>

            </div>
        </nav>
    )
}

export default Navbar;