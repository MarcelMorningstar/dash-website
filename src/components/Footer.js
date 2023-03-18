import React from 'react';

import "../Styles/footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    {/* (Column 1) */}
                    <div className="col">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#" className="link">Taxi</a></li>
                            <li><a href="#" className="link">Become a driver</a></li>
                        </ul>
                    </div>
                    {/* (Column 2) */}
                    <div className="col">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#" className="link">About us</a></li>
                            <li><a href="#" className="link">Contact us</a></li>
                            <li><a href="#" className="link">Privacy policy</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer