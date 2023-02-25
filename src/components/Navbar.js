import { FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";

function Navbar(){
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <h3>Logo</h3>
            <nav ref = {navRef}>
                <a href="/#">Home</a>
                <a href="/#">Order a taxi</a>
                <a href="/#">Info</a>
                <a href="/#">Contact us</a>
                <button className="nav-btn nav-close-btn" onClick = {showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn nav-close-btn" onClick = {showNavBar}>
                <FaBars />
            </button>
        </header>
     );
}

export default Navbar;