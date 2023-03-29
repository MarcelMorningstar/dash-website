import Link from 'next/link';
import React from 'react';


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Izvēlne</h3>
                        <ul>
                            <li><Link href="/"  className="link">Pakalpojumu izsaukšana</Link></li>
                            <li><Link href="/"  className="link">Sadarbība</Link></li>
                            <li><Link href="/"  className="link">Par Mums</Link></li>
                            <li><Link href="/"  className="link">Privātuma politika</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer