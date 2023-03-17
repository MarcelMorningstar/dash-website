import React, { useState } from "react";
import Link from 'next/link'
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav>
            <h3>Logo</h3>
            <div className={open ? 'responsive_nav' : ''}>
                <Link href="/">Home</Link>
                <Link href="/">Order a taxi</Link>
                <Link href="/">Info</Link>
                <Link href="/">Contact us</Link>
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