import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

import "../Styles/navbar.css";

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav>
            <h3>Logo</h3>
            <div className={open ? 'responsive_nav' : ''}>
                <a href="/#">Home</a>
                <a href="/#">Order a taxi</a>
                <a href="/#">Info</a>
                <a href="/#">Contact us</a>
                <button className='nav-btn nav-close-btn' onClick={() => setOpen(!open)}>
                    <FaTimes />
                </button>
            </div>
            <button className='nav-btn nav-close-btn' onClick={() => setOpen(!open)}>
                <FaBars />
            </button>
        </nav>
    );
}

export default Navbar;