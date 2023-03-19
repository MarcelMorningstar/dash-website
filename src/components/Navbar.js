import React, { useState } from "react";
import Link from 'next/link'
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav>
            <h1>DASH</h1>
            <div className={open ? 'responsive_nav' : ''}>
                <Link href="/">Home</Link>
                <Link href="/">Driver</Link>
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