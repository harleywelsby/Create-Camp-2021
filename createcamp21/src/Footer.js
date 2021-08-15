import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div class = "footer">

            <div class = "infoSection">

                <div class = "col">
                    <p>Balance</p>
                    <p>Habits</p>
                    <p>Review</p>
                    <p>Categories</p>
                </div>

                <div class = "col">
                    <p>Contact:</p>
                    <p>lorem@avocado.co.nz</p>
                    <p>0800 269 296</p>
                    <p>The A in ANZ Stands for Avocado</p>
                </div>

            </div>

            <hr class="line"/>

        </div>
    )
}

export default Footer;