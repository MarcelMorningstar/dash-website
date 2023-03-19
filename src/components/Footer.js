import Link from 'next/link';
import React from 'react';


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    {/* (Column 1) */}
                    <div className="col">
                        <h3>Services</h3>
                        <ul>
                            <li><Link href="/" className="link">Taxi</Link></li>
                            <li><Link href="/"  className="link">Become a driver</Link></li>
                        </ul>
                    </div>
                    {/* (Column 2) */}
                    <div className="col">
                        <h3>Company</h3>
                        <ul>
                            <li><Link href="/"  className="link">About us</Link></li>
                            <li><Link href="/"  className="link">Contact us</Link></li>
                            <li><Link href="/"  className="link">Privacy policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer