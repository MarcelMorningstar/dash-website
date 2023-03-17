import React from 'react';

import "../Styles/footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    {/* (Column 1) */}
                    <div className="col">
                        <h1>Services</h1>
                        <ul>
                            <li>Taxi</li>
                            <li>Become a driver </li>
                        </ul>
                    </div>
                    {/* (Column 2) */}
                    <div className="col">
                        <h1>Company</h1>
                        <ul>
                            <li>About us</li>
                            <li>Contact us </li>
                            <li>Privacy policy </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer