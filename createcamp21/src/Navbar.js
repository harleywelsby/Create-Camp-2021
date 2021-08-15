import React from 'react';
import logo from "./avoLogo.svg";
import "./Navbar.css";

/*Navigation bar and logo at the top of every page*/

const Navbar = () => {
    return (        
        <nav class="navbar">
            <div className="container"> 
                <div className="logo"><img src={logo} alt = "Logo" width = "100" height = "100" /></div>
                    
                    <div class="nav-item active" href="#graphs">
                        <a class="nav-link" href="/"> Graphs </a>
                    </div>

                    <div class="nav-item">
                        <a class="nav-link" href="#habits"> Habits </a>
                    </div>


                    <div class="nav-item">
                        <a class="nav-link" href="#review"> Review </a>
                    </div>

            </div>
        </nav>
    )
}

export default Navbar;