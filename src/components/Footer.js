import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <div className = "bottom">
            <div className = "main-footer">
                <div className = "container">
                    <div className = "row">
                        {/* (Column 1) */}
                        <div className = "col">
                            <h1>Payment information</h1>
                            <ul>
                                <li>Taxi taxi taxi</li>
                                <li>Contact number something</li>
                                <li>I am the king</li>
                                <li>Taxi king</li>
                            </ul>
                        </div>
                        {/* (Column 2) */}
                        <div className = "col">
                            <h1>Contact us</h1>
                            <ul>
                                <li>Big trucks</li>
                                <li>Contact </li>
                                <li> T kings</li>
                            </ul>
                        </div>
                        {/* (Column 3) */}
                        <div className = "col">
                            <h1>About us</h1>
                            <ul>
                                <li>I am tired</li>
                                <li>HELp!!! </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer