import React, { useState } from "react";
import Link from 'next/link'
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav>
            <h1>DASH</h1>
            <div className={open ? 'responsive_nav' : ''}>
<<<<<<< HEAD
                <a href="/#">Ride</a>
                <a href="/#">Driver</a>
                <a href="/#">Info</a>
                <a href="/#">Contact us</a>
=======
                <Link href="/">Home</Link>
                <Link href="/">Order a taxi</Link>
                <Link href="/">Info</Link>
                <Link href="/">Contact us</Link>
>>>>>>> refs/remotes/origin/main
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