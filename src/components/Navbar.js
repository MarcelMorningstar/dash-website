import React, { useState } from "react";
import Link from 'next/link'
import { FaBars, FaTimes } from "react-icons/fa";

import Image from 'next/image';

import dashIcon from '../imgs/icon.png';

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className={open ? 'open' : ''}>
            <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                <Image width={60} alt="DASH logo" src={dashIcon} />
            </div>
            <div>
                {/*}
                <Link href="/">Home</Link>
                <Link href="/">Driver</Link>
                <Link href="/">Info</Link>
                <Link href="/">Contact us</Link>
                <button className='nav-btn nav-close-btn' onClick={() => setOpen(!open)}>
                    <FaTimes />
                </button>
                */}
            </div>
            
            {/*
            <button className='nav-btn nav-menu-btn' onClick={() => setOpen(!open)}>
                <FaBars />
            </button>
            */}
        </nav>
    );
}

export default Navbar;